let jobData;

async function getData(){
    const response = await fetch("./js/data.json");
    const data = await response.json();
    jobData = data;
    makeList();
}

addEventListener("load", function(){
    getData();
});


const list_cont = document.querySelector(".list-cont");


function makeList (){
    for(let i = 0; i< jobData.length;i++){
        const list_item = document.createElement("div");
        const img = document.createElement("img");
        const job_info = document.createElement("div");
        const lang_cont = document.createElement("div");
        lang_cont.classList.add("lang-cont");

        const name_cont = document.createElement("div");
        const company = document.createElement("h5");
        let p_new;
        let p_featured;

        const job_name = document.createElement("h3");

        const about_job = document.createElement("div");
        const time = document.createElement("p");
        const icon = document.createElement("i");
        icon.classList.add("fa", "fa-circle");
        const contract = document.createElement("p");
        const location = document.createElement("p");


        list_item.classList.add("list-item");
        list_item.classList.add(jobData[i].role);

        list_cont.appendChild(list_item);
        img.src = jobData[i].logo;
        list_item.appendChild(img);
        list_item.appendChild(job_info);
        list_item.appendChild(lang_cont);

        job_info.classList.add("job-info");
        name_cont.classList.add("name-cont");
        job_info.appendChild(name_cont);

        job_name.classList.add("job-name");
        job_name.textContent = jobData[i].position;
        job_info.appendChild(job_name);

        company.classList.add("company");
        company.textContent = jobData[i].company;
        name_cont.appendChild(company);
        if (jobData[i].new == true) {
            p_new = document.createElement("p");
            p_new.classList.add("p-new");
            p_new.textContent = "New";
            name_cont.appendChild(p_new);
        }
        if (jobData[i].featured == true) {
            p_featured = document.createElement("p");
            p_featured.classList.add("p-featured");
            p_featured.textContent = "Featured";
            name_cont.appendChild(p_featured);
        }

        about_job.classList.add("about-job");
        job_info.appendChild(about_job);
        time.classList.add("time");
        time.textContent = jobData[i].postedAt;
        contract.classList.add("contract");
        contract.textContent = jobData[i].contract;
        location.classList.add("location");
        location.textContent = jobData[i].location;
        about_job.appendChild(time);
        about_job.appendChild(icon.cloneNode(true));
        about_job.appendChild(contract);
        about_job.appendChild(icon.cloneNode(true));
        about_job.appendChild(location);


        for(let z = 0;z<jobData[i].languages.length;z++){
            const lang_item = document.createElement("p");
            lang_item.classList.add("lang-item");
            lang_item.textContent = jobData[i].languages[z];
            lang_cont.appendChild(lang_item);
        }
        for(let j = 0;j<jobData[i].tools.length;j++){
            const lang_item = document.createElement("p");
            lang_item.classList.add("lang-item")
            lang_item.textContent = jobData[i].tools[j];
            lang_cont.appendChild(lang_item);
        }




    }
}