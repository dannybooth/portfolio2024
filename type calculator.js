var types=[[18],[[],[],[]]];

for (var i = 0; i < 18; i++)
{
    types[0][i]=document.createElement("img");
    types[0][i].style.padding = "20px 6px";
}

types[0][0].src = "images/ice.png";
types[0][1].src = "images/bug.png";
types[0][2].src = "images/ghost.png";
types[0][3].src = "images/grass.png";
types[0][4].src = "images/water.png";
types[0][5].src = "images/dragon.png";
types[0][6].src = "images/electric.png";
types[0][7].src = "images/flying.png";
types[0][8].src = "images/fairy.png";
types[0][9].src = "images/ground.png";
types[0][10].src = "images/steel.png";
types[0][11].src = "images/poison.png";
types[0][12].src = "images/rock.png";
types[0][13].src = "images/normal.png";
types[0][14].src = "images/dark.png";
types[0][15].src = "images/fighting.png";
types[0][16].src = "images/psychic.png";
types[0][17].src = "images/fire.png";

//ice
types[1][0]=[[types[0][5],types[0][3],types[0][9],types[0][7]],
[],
[types[0][0]]];

//bug
types[1][1]=[[types[0][16],types[0][14],types[0][3]],
[types[0][3],types[0][9],types[0][15]],
[]];

//ghost
types[1][2]=[[types[0][2],types[0][16]],
[types[0][11],types[0][1]],
[types[0][13],types[0][15]]];

//grass
types[1][3]=[[types[0][4],types[0][9],types[0][12]],
[types[0][3],types[0][4],types[0][9],types[0][6]],
[]];

//water
types[1][4]=[[types[0][17],types[0][12],types[0][9]],
[types[0][4],types[0][17],types[0][0],types[0][10]],
[]];

//dragon
types[1][5]=[[types[0][5]],
[types[0][3],types[0][4],types[0][6],types[0][17]],
[]];

//electric
types[1][6]=[[types[0][4],types[0][7]],
[types[0][6],types[0][7],types[0][10]],
[]];

//flying
types[1][7]=[[types[0][3],types[0][1],types[0][15]],
[types[0][3],types[0][1],types[0][15]],
[types[0][9]]];

//fairy
types[1][8]=[[types[0][5],types[0][14],types[0][15]],
[types[0][10],types[0][11],types[0][17]],
[types[0][5]]];

//ground
types[1][9]=[[types[0][6],types[0][10],types[0][17],types[0][11],types[0][12]],
[types[0][12],types[0][11]],
[types[0][6]]];

//steel
types[1][10]=[[types[0][0],types[0][8],types[0][12]],
[types[0][13],types[0][3],types[0][0],types[0][7],types[0][16],types[0][1],types[0][5],types[0][12],types[0][10],types[0][8]],
[types[0][11]]];

//poison
types[1][11]=[[types[0][8],types[0][3]],
[types[0][11],types[0][3],types[0][1],types[0][8],types[0][15]],
[]];

//rock
types[1][12]=[[types[0][17],types[0][7],types[0][0],types[0][1]],
[types[0][7],types[0][13],types[0][17],types[0][11]],
[]];

//normal
types[1][13]=[[],
[],
[types[0][2]]];

//dark
types[1][14]=[[types[0][2],types[0][16]],
[types[0][14],types[0][2]],
[]];

//fighting
types[1][15]=[[types[0][13],types[0][12],types[0][10],types[0][14],types[0][0]],
[types[0][1],types[0][12],types[0][14]],
[]];

//psychic
types[1][16]=[[types[0][11],types[0][15]],
[types[0][16],types[0][15]],
[]];

//fire
types[1][17]=[[types[0][3],types[0][0],types[0][1],types[0][10]],
[types[0][17],types[0][3],types[0][0],types[0][1],types[0][10],types[0][8]],
[]];

//blank
types[1][18]=[[],
[],
[]];


let results = document.getElementById("results");
results.style.visibility="hidden";

//select
function select(imgSlct,classSlct,num) {
    let type1 =document.getElementById('type1').class;
    let type2 =document.getElementById('type2').class;
    if('type1'==num)
    {
        if('dropbtn '+classSlct!=type2)
        {
            document.getElementById(num).src = imgSlct;
            document.getElementById(num).class = 'dropbtn '+classSlct;
            console.log(num+' has been selected to be: '+document.getElementById(num).class.split(' ')[1]);
            return
        }
    }
    else if('type2'==num)
    {
        if('dropbtn '+classSlct!=type1)
        {
            document.getElementById(num).src = imgSlct;
            document.getElementById(num).class = 'dropbtn '+classSlct;
            console.log(num+' has been selected to be: '+document.getElementById(num).class.split(' ')[1]);
            return
        }
    }
    console.log('Types combinations cannot be a duplicate duel type');
  }

  document.getElementById('type1').class = 'dropbtn normal';
  document.getElementById('type2').class = 'dropbtn';

  var srcAvg = document.getElementById("adventages");
  var srcWeak = document.getElementById("weaknesses");
  var srcRes = document.getElementById("resistances");
  var srcImu = document.getElementById("immunities");

  //calc
  function calculate() {
    let type1 = document.getElementById("type1").class;
    let type2 = document.getElementById("type2").class;
    
    results.style.visibility="visible";

    srcAvg.innerText='';
    srcWeak.innerText='';
    srcRes.innerText='';
    srcImu.innerText='';

    let num1=output(type1);
    let num2=output(type2);

    addAvg(types[1][num1]);
    addAvg(types[1][num2]);

    addImu(types[1][num1]);
    addImu(types[1][num2]);

    let neutral = addWeak(num1,num2);
    let neutral2 = addWeak(num2,num1);

    addRes(types[1][num1],neutral2);
    addRes(types[1][num2],neutral);

    if(immunities.innerHTML=="")
    {
        const heading = document.createElement('h1');
        heading.textContent = '\u00A0No immunities';
        srcImu.appendChild(heading);
    }
    if(adventages.innerHTML=="")
    {
        const heading = document.createElement('h1');
        heading.textContent = '\u00A0No adventages';
        srcAvg.appendChild(heading);
    }
    if(resistances.innerHTML=="")
    {
        const heading = document.createElement('h1');
        heading.textContent = '\u00A0No resistances';
        srcRes.appendChild(heading);
    }
    if(weaknesses.innerHTML=="")
    {
        const heading = document.createElement('h1');
        heading.textContent = '\u00A0No weaknesses';
        srcWeak.appendChild(heading);
    }
}

function addAvg(avg){
    for (var i = 0; i < avg[0].length; i++)
    {
        let imageFound = false;
        const images = srcAvg.querySelectorAll('img');
        for (let ii = 0; ii < images.length; ii++) {
            if (images[ii].src === avg[0][i].src) {
                imageFound = true;
                break;
            }
        }
        if(!imageFound)
        {
            srcAvg.appendChild(avg[0][i].cloneNode(true));
        }
    }
}

function addRes(res,notFound){
    for (var i = 0; i < res[1].length; i++)
    {
        let imageFound = false;
        const images = srcRes.querySelectorAll('img');
        const images2 = srcImu.querySelectorAll('img');
        for (let ii = 0; ii < images.length; ii++) {
            if (images[ii].src === res[1][i].src) {
                imageFound = true;
                break;
            }
        }
        for (let ii = 0; ii < images2.length; ii++) {
            if (images2[ii].src === res[1][i].src) {
                imageFound = true;
                break;
            }
        }
        for(let ii = 0; ii < notFound.length; ii++)
        {
            if(res[1][i].src===notFound[ii].src)
            {
                imageFound = true;
                break;
            }
        }
        if(!imageFound)
        {
            srcRes.appendChild(res[1][i]);
        }
    }
}

function addImu(imu){
    for (var i = 0; i < imu[2].length; i++)
    {
        srcImu.appendChild(imu[2][i]);
    }
}

function addWeak(type,type2){
    let notFound=[];
    for (let i = 0; i < types[0].length; i++)
    {
        for (let ii = 0; ii < types[1][i][0].length; ii++)
        {
            if(types[0][type]==types[1][i][0][ii])
            {
                let found=false;
                for (let iii = 0; iii <types[1][type2][1].length; iii++)
                {
                if(types[1][type2][1][iii]==types[0][i])
                {
                    found = true;
                }
            }
            for (let iii = 0; iii <types[1][type2][2].length; iii++)
                {
                    if(types[1][type2][2][iii]==types[0][i])
                {
                    found = true;
                }
                }
            if(!found)
                {
                srcWeak.appendChild(types[0][i]);
                break;
                }
                else{
                    notFound.push(types[0][i]);
                }
            }
        }
    }
    return(notFound);
}


function output(type1){
    switch(type1.split(' ')[1]){
        case 'fire':
            return 17;
        case 'water':
            return 4;
        case 'grass':
            return 3;
        case 'normal':
            return 13;
        case 'bug':
            return 1;
        case 'dark':
            return 14;
        case 'electric':
            return 6;
        case 'fairy':
            return 8;
        case 'fighting':
            return 15;
        case 'flying':
            return 7;
        case 'ghost':
            return 2;
        case 'ground':
            return 9;
        case 'ice':
            return 0;
        case 'poison':
            return 11;
        case 'psychic':
            return 16;
        case 'rock':
            return 12;
        case 'dragon':
            return 5;
        case 'steel':
            return 10;
        default:
            return 18;
        }
}
