class Bribe
{
    constructor(x,y){
        this.result = "";
        this.convincer = "";
        this.convincerIndex = 0;
        this.yes = createButton("yes");
        this.no = createButton("no");
    }

    convince()
    {
        var chance = Math.round(random(1,8));
        switch(chance)
        {
            case 1 : this.result = "go away";
            break;
            case 2 : this.result = "bribe";
            break;
            case 3 : this.result = "go away";
            break;
            case 4 : this.result = "go away";
            break;
            case 5 : this.result = "go away";
            break;
            case 6 : this.result = "go away";
            break;
            case 7 : this.result = "go away";
            break;
            case 8 : this.result = "go away";
            break;
        }

        if(this.result === "go away")
        {
            this.convincer = "";
        }

        if(this.result === "bribe")
        {
            var convincer = Math.round(random(1,7));
            switch(convincer)
            {
                case 1 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;
                break;
                case 2 : this.convincver = "Please, don't I have to meet my family.";this.convincerIndex = 2;
                break;
                case 3 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;
                break;
                case 4 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;
                break;
                case 5 : this.convincer = "Don't you dare I will kill you."; this.convincerIndex = 3;
                break;
                case 6 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;
                break;
                case 7 : this.convincer = "Please, don't I will give you money.";this.convincerIndex = 1;
                break;
            }
        }
        if(this.convincerIndex === 1)
        {
            text("Take this money",100,300);
        }
    }

    display()
    {
        console.log("bribe"+this.result);
        console.log("bribe"+this.convincer);
        fill("white");
        text(this.convincerm,400,300);
    }
}