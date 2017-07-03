/**
 * Created by 蛋 on 2017/6/21.
 */
$(function(){
    $('#send').click(
        function () {
            $.get("get.php",{
                username:$('#username').val(),
                content:$('#content').val()
            },function (data,textStatus) {
                $('#resText').html(data);
            });
        }
    );
});