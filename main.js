student_array=[];
function submit()
{
    var name1=document.getElementById("student_name_1").value;
    var name2=document.getElementById("student_name_2").value;
    var name3=document.getElementById("student_name_3").value;
    student_array.push(name1);
    student_array.push(name2);
    student_array.push(name3);
    document.getElementById("display_name").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student_array.sort();
    document.getElementById("display_name").innerHTML=student_array;
}