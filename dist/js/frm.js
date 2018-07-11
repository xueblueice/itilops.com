$(function () {

    $("#defaultForm").submit(function(e){
        e.preventDefault();
        var data = $('#defaultForm').serialize();

        var submitData=decodeURIComponent(data,true);
        var p = '{"id": "id","profile": "intg","from": "itilops@itilops.com","to": "bj_intg@163.com","subject": "Mail from itilops.com","body": "'+submitData+'"}';
        
        $.ajax({
            url:'https://www.itilops.com/api/mail/send',
            data:p,
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            cache:false,
            async:true,
            beforeSend:function(){
                
            },
            success:function(result){
                $('#myModal').modal('show');
            },
            complete:function(){
                
            },
            error:function(){
                $('#myModalfailed').modal('show');
                
            }
        })
       

    });


   

});