$(document).ready(function () {
    var form = $('.ui.form').form({
        fields: {
            mail: {
                identifier: 'mail',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor informe o seu usuário'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Por favor informe sua senha'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'Sua senha pode ter no mínimo 6 caracteres'
                    }
                ]
            }
        },
        onSuccess: function () {
            $.ajax({
                type: 'POST',
                url: base_url + 'account/sign/logging',
                data: form.serialize(),
                success: function (data) {
                    switch (data) {
                        case 'true':
                            window.location.reload();
                            break;
                        case 'false':
                            form.form('add prompt', 'password', 'As informações de acesso estão incorretas. tente novamente.');
                            break;
                    }
                }
            });
        }
    });
});

$('.ui.form').submit(function (e) {
    //e.preventDefault(); usually use this, but below works best here.
    return false;
});
