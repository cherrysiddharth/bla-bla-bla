function add_user(){
    user_save1=document.getElementById("input_text").Value;
    localStorage.setItem("user_name",user_save1);
    window.location="kwitter_room.html";

}