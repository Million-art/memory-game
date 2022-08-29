const cardArray=[
            {
                name:'friese',
                img:'images/friese.png'
            },
            {
                name:'cheese',
                img:'images/cheese.png'
            }  
            , {
                name:'TEA',
                img:'images/TEA.png'
            }, {
                name:'milksheake',
                img:'images/milksheake.png'
            }, {
                name:'piza',
                img:'images/piza.png'
            }
            , {
                name:'coffee',
                img:'images/COFFEE.jpg'
            } ,
            {
                name:'friese',
                img:'images/friese.png'
            },
            {
                name:'cheese',
                img:'images/cheese.png'
            }  
            , {
                name:'TEA',
                img:'images/TEA.png'
            }, {
                name:'milksheake',
                img:'images/milksheake.png'
            }, {
                name:'piza',
                img:'images/piza.png'
            }
            , {
                name:'coffee',
                img:'images/COFFEE.jpg'
            } 
     
        ]
        //placing cars randomly whene the page refreshed
         cardArray.sort(()=>0.5-Math.random());
          const gridDisplay=document.getElementById('grid');
          const resultDisplay=document.querySelector('#result');
          //initializing empty array to recive clicked cards name and image 
          let cardChoosen=[];

          let cardChoosenId=[];
          let cardWon=[];
          //function to check selected images if they are mached
        function checkMatch(){
            const cards=document.querySelectorAll('#grid img');
            const optionOneId=cardChoosenId[0];
            const optionTwoId=cardChoosenId[1];
          if(optionOneId==optionTwoId){
            cards[optionOneId].setAttribute('src','images/gray.png');
            cards[optionTwoId].setAttribute('src','images/gray.png');
               alert('you have clicked the same image');
            }
            if(cardChoosen[0]==cardChoosen[1]){
               alert('found match')
               cards[optionOneId].setAttribute('src','images/gra.png');
               cards[optionTwoId].setAttribute('src','images/gra.png');
               cards[optionOneId].removeEventListener('click',flipCard);
               cards[optionTwoId].removeEventListener('click',flipCard);
               cardWon.push(cardChoosen)
            }
            else{
                cards[optionOneId].setAttribute('src','images/gray.png');
                cards[optionTwoId].setAttribute('src','images/gray.png');
                alert('sorry try again');
            }
            resultDisplay.textContent=cardWon.length;
           cardChoosen=[];
           cardChoosenId=[];
           if(cardWon.length == cardArray.length/2){
                gridDisplay.textContent='congatulation you found all of them';
            }
         }
                 //function to crate a bord of image to be choosen

         function crateBord(){
            for (let i=0; i<cardArray.length; i++){
                const card=document.createElement('img');
                card.className='img'
                card.setAttribute('src','images/gray.png');
                card.setAttribute('data-Id',i);               
                card.addEventListener('click', flipCard);
                gridDisplay.append(card);
              }
         }
         crateBord();
       
             function flipCard(){
                const cardId=this.getAttribute('data-id');
                cardChoosen.push(cardArray[cardId].name);  
                cardChoosenId.push(cardId);

                this.setAttribute('src',cardArray[cardId].img) 
            if(cardChoosen.length===2){
                setTimeout(checkMatch, 500)
            }           }