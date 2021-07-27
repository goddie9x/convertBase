function setCanvasParticle(position = 'relative', zIndex = 20) {
    ! function(a) { var b = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global; "function" == typeof define && define.amd ? define(["exports"], function(c) { b.ParticleNetwork = a(b, c) }) : "object" == typeof module && module.exports ? module.exports = a(b, {}) : b.ParticleNetwork = a(b, {}) }(function(a, b) {
        var c = function(a) { this.canvas = a.canvas, this.g = a.g, this.particleColor = a.options.particleColor, this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height, this.velocity = { x: (Math.random() - .5) * a.options.velocity, y: (Math.random() - .5) * a.options.velocity } };
        return c.prototype.update = function() {
            (this.x > this.canvas.width + 20 || this.x < -20) && (this.velocity.x = -this.velocity.x), (this.y > this.canvas.height + 20 || this.y < -20) && (this.velocity.y = -this.velocity.y), this.x += this.velocity.x, this.y += this.velocity.y
        }, c.prototype.h = function() { this.g.beginPath(), this.g.fillStyle = this.particleColor, this.g.globalAlpha = .7, this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI), this.g.fill() }, b = function(a, b) { this.i = a, this.i.size = { width: this.i.offsetWidth, height: this.i.offsetHeight }, b = void 0 !== b ? b : {}, this.options = { particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff", background: void 0 !== b.background ? b.background : "#1a252f", interactive: void 0 !== b.interactive ? b.interactive : !0, velocity: this.setVelocity(b.speed), density: this.j(b.density) }, this.init() }, b.prototype.init = function() {
            if (this.k = document.createElement("div"), this.k.classList.add('b_g'), this.i.appendChild(this.k), this.l(this.k, { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, "z-index": 1 }), /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)) this.l(this.k, { background: this.options.background });
            else {
                if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)) return console.error("Please specify a valid background image or hexadecimal color"), !1;
                this.l(this.k, { background: 'url("' + this.options.background + '") no-repeat center ', "background-size": "cover" })
            }
            if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)) return console.error("Please specify a valid particleColor hexadecimal color"), !1;
            this.canvas = document.createElement("canvas"), this.i.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.canvas.width = this.i.size.width, this.canvas.height = this.i.size.height, this.l(this.i, { position: "relative" }), this.l(this.canvas, { "z-index": `${zIndex}`, position: `${position}` }), window.addEventListener("resize", function() {
                return this.i.offsetWidth === this.i.size.width && this.i.offsetHeight === this.i.size.height ? !1 : (this.canvas.width = this.i.size.width = this.i.offsetWidth, this.canvas.height = this.i.size.height = this.i.offsetHeight, clearTimeout(this.m), void(this.m = setTimeout(function() {
                    this.o = [];
                    for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
                    this.options.interactive && this.o.push(this.p), requestAnimationFrame(this.update.bind(this))
                }.bind(this), 500)))
            }.bind(this)), this.o = [];
            for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
            this.options.interactive && (this.p = new c(this), this.p.velocity = { x: 0, y: 0 }, this.o.push(this.p), this.canvas.addEventListener("mousemove", function(a) { this.p.x = a.clientX - this.canvas.offsetLeft, this.p.y = a.clientY - this.canvas.offsetTop }.bind(this)), this.canvas.addEventListener("mouseup", function(a) { this.p.velocity = { x: (Math.random() - .5) * this.options.velocity, y: (Math.random() - .5) * this.options.velocity }, this.p = new c(this), this.p.velocity = { x: 0, y: 0 }, this.o.push(this.p) }.bind(this))), requestAnimationFrame(this.update.bind(this))
        }, b.prototype.update = function() {
            this.g.clearRect(0, 0, this.canvas.width, this.canvas.height), this.g.globalAlpha = 1;
            for (var a = 0; a < this.o.length; a++) {
                this.o[a].update(), this.o[a].h();
                for (var b = this.o.length - 1; b > a; b--) {
                    var c = Math.sqrt(Math.pow(this.o[a].x - this.o[b].x, 2) + Math.pow(this.o[a].y - this.o[b].y, 2));
                    c > 120 || (this.g.beginPath(), this.g.strokeStyle = this.options.particleColor, this.g.globalAlpha = (120 - c) / 120, this.g.lineWidth = .7, this.g.moveTo(this.o[a].x, this.o[a].y), this.g.lineTo(this.o[b].x, this.o[b].y), this.g.stroke())
                }
            }
            0 !== this.options.velocity && requestAnimationFrame(this.update.bind(this))
        }, b.prototype.setVelocity = function(a) { return "fast" === a ? 1 : "slow" === a ? .33 : "none" === a ? 0 : .66 }, b.prototype.j = function(a) { return "high" === a ? 5e3 : "low" === a ? 2e4 : isNaN(parseInt(a, 10)) ? 1e4 : a }, b.prototype.l = function(a, b) { for (var c in b) a.style[c] = b[c] }, b
    });
    var canvasDiv = document.querySelector('.canv');
    var options = {
        particleColor: '#888',
        interactive: true,
        speed: 'medium',
        density: 'high'
    };
    var particleCanvas = new ParticleNetwork(canvasDiv, options);
}

setCanvasParticle('fixed', 3);

function start() {

    function parseFloat(string, radix) {
        // Split the string at the decimal point
        string = string.split(/\./);

        // If there is nothing before the decimal point, make it 0
        if (string[0] == '') {
            string[0] = "0";
        }

        // If there was a decimal point & something after it
        if (string.length > 1 && string[1] != '') {
            var fractionLength = string[1].length;
            string[1] = parseInt(string[1], radix);
            string[1] *= Math.pow(radix, -fractionLength);
            return parseInt(string[0], radix) + string[1];
        }

        // If there wasn't a decimal point or there was but nothing was after it
        return parseInt(string[0], radix);
    }

    function base64(text, type = 'en') {
        if (type == 'en') {
            return Base64.encode(text);
        }
        if (type == 'de') {
            return Base64.decode(text);
        }
    }

    function convertBase64(formID) {
        let form = $(formID);
        let inputBase64 = form.find('#base64');
        let inputText = form.find('#nomal_text');

        inputBase64.unbind().on('input', function(e) {
            inputText[0].value = base64(this.value);
        });
        inputText.unbind().on('input', function(e) {
            inputBase64[0].value = base64(this.value, 'de');
        });
    }

    function convertBase(formID) {
        let form = $(formID);
        let inputs = [];

        inputs.push(form.find('#decimal')[0]);
        inputs.push(form.find('#binary')[0]);
        inputs.push(form.find('#octal')[0]);
        inputs.push(form.find('#hex')[0]);

        inputs.forEach(function(input, index) {
            input.oninput = function() {
                inputs.forEach(element => {
                    $(element).parent().next().html('');
                });
                let inVal = input.value;
                let currentBase = input.getAttribute('base');

                if (currentBase == 16 && /[^0-9A-F]/i.test(inVal)) {
                    $(input).parent().next().html('Vui lòng nhập đúng kiểu thâp lục phân');
                }
                let valueInputToDecimal = parseFloat(inVal, currentBase);

                if (isNaN(inVal) && currentBase != 16) {
                    $(input).parent().next().html('Vui lòng nhập số');
                }
                inputs.forEach(function(input2, index2) {
                    if (index2 != index) {
                        let typeBase = input2.getAttribute('base');

                        if (isNaN(valueInputToDecimal) && currentBase != 16) {
                            $(input).parent().next().html('Vui lòng nhập đúng kiểu dữ liệu');
                        } else {

                            input2.value = valueInputToDecimal.toString(typeBase);
                        }
                    }
                })

            }
        })
    }

    function switchTop(switchContains) {
        let type = typeof(switchContains);

        if (type == 'string') {

            let switchBtn = $(`${switchContains} .switch`);
            let swichableParent = $(`${switchContains} .swichable`).parent();

            switchBtn.on('click', function(e) {
                switchBtn.removeClass('first');

                $(this).parents('.swichable').prependTo(swichableParent);
                $(this).addClass('first');
            });
        }
        if (type == 'array' || type == 'object') {
            switchContains.forEach(switchContain => {
                let switchBtn = $(`${switchContain} .switch`);
                let swichableParent = $(`${switchContain} .swichable`).parent();

                switchBtn.on('click', function(e) {
                    switchBtn.removeClass('first');

                    $(this).parents('.swichable').prependTo(swichableParent);
                    $(this).addClass('first');
                });
            })
        }
    }
    switchTop(['#convert_form', '#convert_base64']);
    convertBase('#convert_form');
    convertBase64('#convert_base64');
}

start();


function rand(range) {
    return Math.floor(Math.random() * (range));
}

function handleMusic(elementContain, volume, arraySrcMusic = ['./assets/medias/Bad_liar.mp3', './assets/medias/Believer.mp3', './assets/medias/Demons.mp3', './assets/medias/It_s_Time.mp3', './assets/medias/Natural.mp3', './assets/medias/Radioactive.mp3']) {
    let musicSrcs = arraySrcMusic;
    let secMSrc = [];

    function createMusic(elementContain, arrayMusic, index, volume) {
        $(elementContain).append(`<audio autoplay="true" loop controls="true" src="${arrayMusic[index]}" class="my-cosmos-music"></audio>`);
        $('.my-cosmos-music')[0].volume = volume;
        $('.my-cosmos-music')[0].play();
    }

    function renderMusic(elementContain, volume = 0.2) {
        let length = musicSrcs.length;

        if (length == 0) {
            musicSrcs = secMSrc;
            secMSrc = [];
            length = musicSrcs.length;
        }

        let index = rand(length);

        createMusic(elementContain, musicSrcs, index, volume);
        secMSrc.push(musicSrcs.splice(index, 1));
    }
    renderMusic(elementContain, volume);
}
$(document).ready(function() {
    $('.my-cosmos-music').on('ended', function() {
        handleMusic('h1');
    });
    $('.members').owlCarousel({
        items: 3,
        responsive: {
            1200: {
                items: 3,
            },
            992: {
                items: 2,
            },
            600: {
                items: 1,
            },
            2: {
                items: 1,
            }
        },
        nav: true,
        rewind: true,
        loop: true,
        margin: 20,
        autoplay: true,
    });
    handleMusic('h1');

});