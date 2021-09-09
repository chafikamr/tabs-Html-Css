  //Get Elements From DOM tree
        let lists = document.querySelectorAll("ul li");
        let divs =  document.querySelectorAll(".divs_container > div");


        //Show The First Tab By Default
        divs[0].style.display="block";
       


        lists.forEach((element,index) => {

            //Add An Event Listener To All List Elements
            element.addEventListener('click',function(){

                 //Set the sTYLING oF aLL List Items To Default
                lists.forEach(el=>{el.classList.remove('active')})

                //add this class to the clicked item
                this.classList.add('active');

                //hide All content Boxes
                divs.forEach(el=>{el.style.display="none";})

                //Disblay The Box Whitch its Undex Matches The Index Of The Current List Item
                divs[index].style.display="block";
            })});