$(document).ready(function(e) {
    $('#form').on('submit', validateForm)
});

function validateForm()
{
    return validatePassword() && validatePhone();
}
    
function validatePassword()
{
    if ($('#password').val() == "" || $('#password_conf').val() == "")
    {
        alert("Le mot de passe ou sa confirmation n'est pas renseigné.");
        return false;
    }

    if (!($('#password').val() == $('#password_conf').val()))
    {
        alert("Les mots de passes ne sont pas identiques!");
        return false;
    }

    return true;
}


function validatePhone()
{
console.log($("#phone").val());

    if ($('#phone').val() == null)
    {
        alert("Le numéro de téléphone est null.");
        return false;
    }

    if (isNaN(($('#phone').val().length != 10)))
    {
        alert("Le numéro de téléphone doit comporter 10 chiffres.");
        return false;
    }

    if (isNaN(($('#phone').val())))
    {
        alert("Le numéro de téléphone doit comporter uniquement des chiffres.");
        return false;
    }

    return true;
}