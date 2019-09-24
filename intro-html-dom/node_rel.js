window.onload=function()
{
    const btn=document.getElementById("mybtn");
    if(btn)
    {
        document.getElementById("mybtn").addEventListener("click",f1);
    }

    function f1()
        {
            const v=document.getElementById("childlist1");
            const y=v.parentNode;//line 8
            document.getElementById("output").innerHTML=y;
            /*
            The RHS at line 8 can also be replaced by following statements
            v.nextSibling;
            v.previousSibling
            */
        }
    const btn1=document.getElementById("mybtn8");
    if(btn1)
    {
        document.getElementById("mybtn8").addEventListener("click",f2); 
    }

    function f2()
        {
            document.getElementById("c").innerHTML = document.getElementById("childlist1").innerHTML;
            const i = document.getElementById("childlist1").style.color;
            document.getElementById("c").style.color=i;
            /*
            The RHS can be replaced with the following statments also,
            document.getElementById("parentlist").childNodes[0].nodeValue;
            document.getElementById("parentlist").firstChild.nodeValue;
            document.getElementById("parentlist").lastChild.nodeValue;
            */
        }
    const btn2=document.getElementById("mybtn1");
    if(btn2)
    {
        document.getElementById("mybtn1").addEventListener('click',f3);
    }

    function f3()
        {
            /*This function counts number of child elements*/
            
            var o=document.getElementById('secondlist');
            document.getElementById('o1').innerHTML=o.children.length;
            // console.log(o.childElementCount);
        // console.log(o.childNodes.length);
        //Uncomment each of the above statments and observe the changes
        }
    if(document.getElementById("mybtn2"))
    {
        document.getElementById("mybtn2").addEventListener('click',f4);
    }

    function f4()
    {
        /* This functions checks whether a component has children or not*/
        var o=document.getElementById('l1');
        document.getElementById('o2').innerHTML=o.hasChildNodes();
    }
    if(document.getElementById("mybtn3"))
    {
        document.getElementById("mybtn3").addEventListener('click',f5);
    }
   
    function f5()
    {
        /*This function illustrates the use of createElement() and appendChild() methods*/
    
        const o=document.getElementById('i3');
        const l=document.getElementById('l2');
        l.appendChild(o);
        console.log(document.getElementById('l2'));
       /*createElement()
        var myEl = document.createElement('div');
        document.body.appendChild(myEl);
        */

    }
    if(document.getElementById("mybtn4"))
    {
        document.getElementById("mybtn4").addEventListener('click',f6);
    }

    function f6()
    {
        var myList = document.getElementById('l3');
        var k = document.getElementById('i4');
        var old= myList.removeChild(k);
        document.getElementById("o4").innerHTML=old;
    }

    if(document.getElementById("mybtn5"))
    {
        document.getElementById("mybtn5").addEventListener('click',f7);
    }
    function f7()
    {
        var m1 = document.getElementById('kq');
        var m2= document.getElementById("ki");
        document.getElementById("par").replaceChild(m1,m2);  
    }

    if(document.getElementById("mybtn6"))
    {
        document.getElementById("mybtn6").addEventListener('click',f8);
    }

    function f8()
    {
        var myList = document.getElementById('myList');
        console.log(myList.firstElementChild.innerHTML); // "Example one"
        console.log(myList.lastElementChild.innerHTML); // "Example six"
        console.log(myList.firstElementChild.nextElementSibling.innerHTML); // "Example two"
        console.log(myList.lastElementChild.previousElementSibling.innerHTML); // "Example five
    }
    if(document.getElementById("mybtn7"))
    {
        document.getElementById("mybtn7").addEventListener('click',f9);
    }

    function f9()
    {
        var newItem = document.createElement("LI");
        var textnode = document.createTextNode("Water");
        newItem.appendChild(textnode);
        var list = document.getElementById("myList1");
        list.insertBefore(newItem, list.childNodes[0]);
    }


}