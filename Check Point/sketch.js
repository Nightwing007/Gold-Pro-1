var form;
var table,workDesk;

var rule;

var approved,denied,next;

var date;

var action,wrong=0,right = 0;

var dayOfWork = 1;

var money = 0;

var bribe;


var finaltime,counter=0,timeleft = 300;

function preload()
{
  deskIMg = loadImage("Desk/table.png");
  upperIMG = loadImage("Desk/table3.png");
  workIMG = loadImage("Desk/table2.png");
  Pfont = loadFont("Font/pixelated.ttf");
}
function setup() {
  createCanvas(1400,800);
  table = createSprite(350,645);
  table.addImage(deskIMg);
  table.scale = 0.35;
  workDesk = createSprite(1050,505,710,600);
  workDesk.scale = 1.2;
  workDesk.shapeColor = rgb(62,46,28);
  workDesk.addImage(workIMG);

  upper = createSprite(700,78,710,600);
  upper.addImage(upperIMG);
  upper.scale = 0.8;
  upper.shapeColor = rgb(62,46,28);
  form = new Passport(70,550);
  form.decide();

  denied = createButton("DENIED");
  accept = createButton("APPROVED");
  next = createButton("NEXT");
  setInterval(timer,1000);
  book = new Book(100,750);

  bribe = new Bribe(400,400);
}

function draw() {
  background(30);  
  console.log(dayOfWork);
  Accept_Denied();
  if(dayOfWork === 1)
  {
    textFont(Pfont);
    date = "13th NOVEMBER,1983"
    rule = "1.Passport should be correct.\n(check the letter)\n2.They should be only from \nfollowing country -\n 1.BURYAT\n2.KHAKASS\n3.DAGESTAN"

    if(keyWentDown("space"))
    {
      form.decide();
      form.state = 0;
    }
    bribe.display();
    drawSprites();
    nextF()
    fill("black");
    push();
    textSize(25);
    text("$"+ money,1300,50);
    text(convert(timeleft - counter),1300,100);
    pop();
    push();
    textSize(40);
    text(date,40,100);
    pop();
    form.display();
    book.display();
    if((counter -timeleft) >= 0)
    {
      text("gameOver",40,40);
      console.log("gameOver");
    }
  }
}

function mouseDragged(){
  if(mouseX <= form.x + 50 && mouseX >= form.x - 50 && mouseY <= form.y + 50 && mouseY >= form.y - 50)
  {
    if(mouseY >220)
   {
    form.x = mouseX;
    form.y = mouseY;
    form.depth = book.depth +10;
    console.log(form.depth);
   }
  }
  else if(mouseX <= book.x + 200 && mouseX >= book.x - 200 && mouseY <= book.y + 200 && mouseY >= book.y - 200)
  {
    if(mouseY >220)
   {
    book.x = mouseX;
    book.y = mouseY;
    book.depth = form.depth +1;
   }
  }
  
}

function Accept_Denied()
{
  denied.position(1500,810);
  denied.style('background-color',"red");
  denied.style('font-size','20px');
  accept.position(1300,810);
  accept.style('background-color',"green");
  accept.style('font-size','20px');

  if(form.state === 1)
  {
    denied.hide();
    accept.hide();
  }

  if(form.state === 0)
  {
    denied.show();
    accept.show();
  }

  console.log("Wrong" + wrong)
  console.log("Right"+right);

  accept.mousePressed(()=>{
    action = "Approved"
    if(form.state === 0)
    {
      if(form.result != "Approved")
      {
        wrong += 1;
        form.state = 1;
        if(wrong >2)
        {
          money-=4
        }
      }
      if(form.result === "Approved")
      {
        right += 1;
        form.state = 1;
        money += 2;
      }
    }
  })

  denied.mousePressed(()=>{
    action = "Approved"
    if(form.state === 0)
    {
      if(form.result != "Denied")
      {
        wrong += 1;
        form.state = 1;
        if(wrong >2)
        {
          money-=4
        }
        bribe.convince();
      }
      if(form.result === "Denied")
      {
        right += 1;
        form.state = 1;
        money += 2;
        bribe.convince();
      }
    }
  })
}

function timer()
{
  counter ++;
}
function convert(s)
{
  min = floor(s/60);
  sec = s % 60;
  return nf(min,2) + ":" + nf(sec,2) ;
}

function nextF()
{
  next.position(1400,810);
  next.style('background-color',"blue");
  next.style('font-size','20px');

  next.mousePressed(()=>
  {
    form.decide();
    form.state = 0;
  });

  if(form.state === 0)
  {
    next.hide();
  }

  if(form.state === 1)
  {
    next.show();
  }
}