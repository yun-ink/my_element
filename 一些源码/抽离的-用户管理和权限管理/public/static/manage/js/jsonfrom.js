$.fn.formEdit = function (data) {
    return this.each(function () {
        var input, name;
        if (data == null) {
            this.reset();
            return;
        }
        for (var i = 0; i < this.length; i++) {
            input = this.elements[i];

            name = (input.type == "checkbox") ? input.name.replace(/(.+)\[\]$/, "$1") : input.name;
            if (data[name] == undefined) continue;
            switch (input.type) {
                case "checkbox":
                    if (data[name] === "") {
                        input.checked = false;
                    } else {
                        if (data[name].indexOf(input.value) > -1) {
                            input.checked = true;
                        } else {
                            input.checked = false;
                        }
                    }
                    break;
                case "radio":
                    if (data[name] === "") {
                        input.checked = false;
                    } else if (input.value == data[name]) {
                        input.checked = true;
                    }
                    break;
                case "button":
                    break;
                default:
                    input.value = data[name];
            }
        }
    });
};