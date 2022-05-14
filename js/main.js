let input = document.getElementById( "input" );
let but = document.querySelector( ".button" );
let form = document.querySelector( "form" ); 
let error = document.querySelector( ".error" ); 

let errorMassage = document.querySelector( ".errorMassage" );
let validEmail = /[a-z]+[1-9]+@+[a-z].[a-z]/gi;
but.onclick = function ()
{   
    let value = input.value;
    if (  value === "" )
    {
        showErrorMessage();
    } else if (validEmail.test(value))
    {
        input.value = "";
        if ( errorMassage.style.display === "block" )
        {
            errorMassage.style.display = "none";
            error.style.display = "none";
        }

    } else if ( !validEmail.test( value ) )
    {
        showErrorMessage();
    }
}

input.onfocus = function ()
{   
    input.style.border = "2px solid rgb(204 124 124)";
    if ( errorMassage.style.display === "block" )
        {
            errorMassage.style.display = "none";
            error.style.display = "none";
        }
};
function showErrorMessage()
{
            errorMassage.style.display = "block";
        error.style.display = "block";
        input.style.border = "2px solid rgb(253 89 89)";
        input.value = "";
}