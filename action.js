let lists=[];
let consent=prompt("Do you want to make To-Do's \n Enter y/n ");
if(consent.toLowerCase()=='y'){
    while(consent=='y'){
        let option=prompt("What do you want?\n add/show/delete");
        switch(option){
            case "add":
                let element=prompt("Enter you upcoming work: ");
                lists.push(element);
                break;
            case "show":
                for(let i=0;i<lists.length;i++){
                    console.log(i+1,lists[i]);
                }
                break;
            case "delete":
                let index=prompt("Enter the index of work: ");
                lists.splice(index);
                break
            default:
                console.log("invalid option")

        }
        consent=prompt("remain to do?\n y/n")
    }
}
console.log("Wishing to complete your work...")
