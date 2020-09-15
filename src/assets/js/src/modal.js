var modal = document.querySelector('.box-form');

var modalBtn = document.querySelectorAll('.modal-open');

var modalClose = document.querySelectorAll('.close-form');

for (i = 0 ; i< modalBtn.length; i++)
{
    modalBtn[i].addEventListener('click',function(nameModal){
        modal.classList.add('active');
        nameModal = this.id;
        if (nameModal == "modal-kb")
        {
            document.getElementById("form-khambenh").style.display = "flex";
            document.getElementById("form-dichvu").style.display = "none";
            document.getElementById("form-tuvan").style.display = "none";
            document.getElementById("form-gopy").style.display = "none";
        }
        else if (nameModal == "modal-dv")
        {
            document.getElementById("form-dichvu").style.display = "flex";
            document.getElementById("form-khambenh").style.display = "none";
            document.getElementById("form-tuvan").style.display = "none";
            document.getElementById("form-gopy").style.display = "none";
        }
        else if (nameModal == "modal-tv")
        {
            document.getElementById("form-tuvan").style.display = "flex";
            document.getElementById("form-dichvu").style.display = "none";
            document.getElementById("form-khambenh").style.display = "none";
            document.getElementById("form-gopy").style.display = "none";
        }
        else if (nameModal == "modal-tv")
        {
            document.getElementById("form-tuvan").style.display = "flex";
            document.getElementById("form-dichvu").style.display = "none";
            document.getElementById("form-khambenh").style.display = "none";
            document.getElementById("form-gopy").style.display = "none";
        }
        else if (nameModal == "modal-gopy")
        {
            document.getElementById("form-gopy").style.display = "flex";
            document.getElementById("form-dichvu").style.display = "none";
            document.getElementById("form-khambenh").style.display = "none";
            document.getElementById("form-tuvan").style.display = "none";
        }
        console.log(id);
    })
}

for (i=0 ; i<modalClose.length; i++)
{
    modalClose[i].addEventListener('click', function(){
        modal.classList.remove('active');
    });
}