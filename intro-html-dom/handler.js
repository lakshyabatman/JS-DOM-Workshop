function clickMe()
{
    let heading=document.createElement("h3");
    heading.innerText="Hey You Just Clicked this button";
    document.getElementById("onClickExample").append(heading)

}
function changeEvent()
{
    let tag=document.getElementById("field")
    tag.value=tag.value.toUpperCase();
}
function hoverMouse()
{
    document.getElementById("hoverEx").innerText="Hover Out!"
}
function onMouseOut()
{
    document.getElementById("hoverEx").innerText="Hover In!"
}
function mouseDown()
{
    document.getElementById("mousedown").innerText="release me!"
}
function mouseUp()
{
    document.getElementById("mousedown").innerText="Click me!"
}
