//for loop

for(let i=0 ;i<10;i++)
{
    console.log(i)
}

for(let i =0;i<10;i++)
{
    for(let j=0;j<10;j++)
    {
        console.log(i,j)
    }
}


const superheroes = [
    "Superman",
    "Batman",
    "Wonder Woman",
    "Spider-Man",
    "Iron Man",
    "Thor",
    "Hulk",
    "Black Panther",
    "Captain America",
    "Doctor Strange",
    "Aquaman",
    "The Flash",
    "Green Lantern",
    "Scarlet Witch",
    "Black Widow",
    "Ant-Man",
    "Wolverine",
    "Deadpool",
    "Shazam",
    "Hawkeye"
  ]


// --------------------------------------loop on arrays----------------------------------------------------------------
  for(let i=0;i<superheroes.length;i++)
  {
    console.log(superheroes[i])
  }



//---------------keywords--------------------------

// BREAK  -- BREAKS THE LOOP

for(let i=0;i<20;i++)
{
    if(i==5)
    {
        console.log('detected 5')
        break;
    }
    console.log(i)
}


///CONTINUE SKIPS THAT PART
for(let i=0;i<20;i++)
    {
        if(i==5)
        {
            console.log('detected 5')
            continue;
        }
        console.log(i)
    }

// while ,do while loop

let i=0
while(i<10)
{
    console.log(i+'r')
    i++
}


//do 

do{
    console.log('robins')
    i++
}while(i<10);

