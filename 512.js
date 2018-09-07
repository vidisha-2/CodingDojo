for(var num=512, count=0; num<=4096; num = num+1)
    { 
        var a = num%5;
        if(a==0)
        {  
            console.log("number is--",num);
            count = count +  1;
            console.log("I'm counting",count);
        }
        
    } 