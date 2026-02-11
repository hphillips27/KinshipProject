// Defined Stages
const stages = ["Lead", "Contacted", "Qualified", "Trial/Demo", "Closed"];


// Sample Data
const defaultCustomers = [
    { 
    id: 1, 
    name: "John Doe", 
    email: "jd@sample.com",
    stage: "Lead",
    company: "Acme Inc.",
    created_at: new Date(),
    updated_at: new Date()
}];

let customers = JSON.parse(localStorage.getItem("customers")) || defaultCustomers;

//Get all important elements
const pipeline = document.getElementById("pipeline");
const form = document.getElementById("customerForm");
const searchInput = document.getElementById("searchInput");
const stageSelect = document.getElementById("stage");



// Populate stage options
stages.forEach(stage => {
    const option = document.createElement("option");
    option.value = stage;
    option.textContent = stage;
    stageSelect.appendChild(option);
});


// Render Pipeline Function
function renderPipeline() {
    const searchTerm = searchInput.value.toLowerCase();
    pipeline.innerHTML = "";

    stages.forEach(stage => {
        
        //grabbing customers for current stage (checking for both value and datatype)
        const stageCustomers = customers.filter(customer => 
            customer.stage === stage && 
            ((customer.name || "").toLowerCase().includes(searchTerm) || (customer.company || "").toLowerCase().includes(searchTerm) || (customer.email || "").toLowerCase().includes(searchTerm))
        );

        
        //Build customer cards
        const cardHTML = stageCustomers.map(customer =>
            `
            <div class="card mb-2">
                <div class="card-body"> 
                    
                    <h6>${customer.name}</h6>
                    <p class="mb-1">${customer.company}</p>
                    <p class="mb-1 text-mute small">${customer.email || ""}</p>
                    <p class="small text-muted">
                        Updated: ${new Date(customer.updated_at).toLocaleDateString()}
                    </p>
                    <p class="small text-muted">
                        Created: ${new Date(customer.created_at).toLocaleDateString()}
                    </p>

                    <select class="form-select form-select-sm" onchange="updateCustomerStage(${customer.id}, this.value)">
                    ${stages.map(s => `
                        <option value="${s}" ${s === customer.stage ? "selected" : ""}>
                            ${s}
                        </option>
                        `).join("")}
                    </select>

                </div>
            </div>
        `).join("");


        //Create stage column
        pipeline.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-header text-center fw-bold"> 
                        ${stage} (${stageCustomers.length})
                    </div>
                    <div class="card-body">
                        ${cardHTML}
                    </div>                
                </div>
            </div>
        `;
    });
}


//Add Customer Function
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const now = new Date();

    const newCustomer = {
        id: Date.now(),
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        company: form.elements.company.value.trim(),
        stage: form.elements.stage.value,
        created_at: now,
        updated_at: now
    };

    customers.push(newCustomer);
    localStorage.setItem("customers", JSON.stringify(customers));
    renderPipeline();
    form.reset();
});


//Update Customer Stage Function
function changeStage(id, newStage){
    const c = customers.find(c => c.id == id);
    if (!c) return;
    c.stage = newStage;
    c.updated_at = new Date().toLocaleDateString();
    localStorage.setItem("customers", JSON.stringify(customers));
    renderPipeline();
}
window.updateCustomerStage = changeStage;


//Search Function
searchInput.addEventListener("input", renderPipeline);



//Initial Render
renderPipeline();


//Header Scroll Effect
const header = document.querySelector('.crm-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
