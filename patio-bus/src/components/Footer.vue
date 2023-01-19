<template>
    <v-footer :height="height" class="grid-container">

        <div class="columna1 mt-12">
            <div class="mg-container">
                <v-btn text disabled class="v-btn-mg">
                    <v-img src="" class="v-img-title-mg">
                    </v-img>
                </v-btn>
            </div>
            <div>
                <v-btn icon @click="google" style="width: 25px; height: 20px;">
                    <v-icon color="#ffff">
                        mdi-google-maps
                    </v-icon>
                </v-btn>
                <v-btn icon href="https://www.facebook.com/Mucho-Gusto-110256295138152" >
                    <v-img src="../assets/Fce2.png" contain width="25" height="20" style="border-radius: 50%;"></v-img>
                </v-btn>
                <v-btn icon href='https://www.instagram.com/muchogusto.info/'>
                    <v-img src="../assets/Inst.2.png" contain width="25" height="20"></v-img>
                </v-btn>         
              
            </div>
            <div class="d-flex flex-row mt-3">
                <v-btn icon text>
                    <v-icon color="#ffff">
                        mdi-information
                    </v-icon>
                </v-btn>
                <a @click="createItem" class="title-mg1 mt-2"><strong>PREGUNTAS FRECUENTES</strong></a>
            </div>
        </div>

        <v-btn text color="transparent" class="v-btn-footer" @click="scrollTop">
            <v-img src="" class="img-png"></v-img>
        </v-btn>


        <div class="columna3">
 <v-btn class="wsp-btn" style=" ;" v-if="
        !mobileViewSmall" elevation="9" fab fixed right bottom color="white">
            <v-img src="../assets/WhatsAppVerde.png" contain width="30" height="30">

            </v-img>
        </v-btn>
        </div>
        
       
        <div class="columna2" contain>
            <div style="width: 200px; margin-left: 25%;">
            <v-img class="footer-center mt-5" src="../assets/patio-bus-footer-center.png">                 
            </v-img>
            </div>
        </div>
    </v-footer>

</template>

<script>

export default {
    name: 'FootEr',

    data: () => ({
        mobileViewSmall: false,
        height: '',
        dialog: false,
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Tu nombre es requerido',
            v => v.length >= 5 || 'Tu nombre no puede tener menos de 3 caracteres',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail es requerido',
            v => /.+@.+/.test(v) || 'Tu email tiene que ser valido',
        ],
        mensaje: '',
        msgRules: [
            v => !!v || 'Un mensaje es requerido',
            v => v.length >= 10 || 'Tu mensaje no puede tener menos de 10 caracteres',

        ],

    }),
    methods: {
        mobileViewFunctionSmall() {

            this.mobileViewSmall = window.innerWidth <= 500;
            console.log('mobile version')
        },
        changeHeight() {

            if (window.innerWidth <= 960) {
                this.height = '100';
            }
            else if (window.innerWidth >= 960) {
                this.height = '250'
            }


        },


        scrollTop() {
            window.scrollTo(0, 0)
        },

        createItem() {
            this.cancel();
            this.dialog = true;
        },
        cancel() {
            this.dialog = false;
            this.$nextTick(() => {
                if (this.$refs['form']) {
                    this.$refs.form.reset();
                }
            });
        },


    },
    created() {
        this.changeHeight();
        this.mobileViewFunctionSmall();
    }

}
</script>

<style lang="scss" scoped >
.v-dialog {
    background-color: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 50px;
}

.form {
    gap: 15px;

    .v-btn-cont {
        background-color: black;
    }
}

.form {
    background-color: white;
    margin: 0;

    padding: 0;
    height: 300px;
}

h1 {
    font-family: 'humanst521_btbold';
    font-size: 20px;
    font-weight: bolder;
    color: #374763;
}

h3 {
    font-family: 'humanst521-1';
    font-size: 13px;
    color: #374763;
}

.title-mg1 {
    color: #FFF;
    font-family: 'humanst521-1';
    font-weight: bolder;
    font-size: 16px;
    margin-top: 3px;
}

.grid-container {   
    position: relative;
    width: 100%;    
    top: 100vh;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    grid-gap: 10px;
    grid-row: 1, 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    padding: 0px;


}

.columna1 {
    grid-row: 1;
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
    margin-bottom: 50px
}
.columna2 {
        height: 100%;
        padding: 50px;
        grid-row: 1/2;
        grid-column: 2/3;

    }
.v-btn-footer {

    grid-row: 1/2;
    grid-column: 2/3;
    transform: scale(0.1);

    .img-png {
        transform: scale(1.7);
    }

}
.wsp-btn{
    margin-bottom: 150px;
    margin-right: 95px; 
    width: 50px; 
    height: 50px;
}

.columna3 {
    grid-row: 1;
    grid-column: 3/4;
    display: flex;
    justify-content: right;
    margin-right: 50px;
}

.mg-container {
    display: flex;
    margin-bottom: 25px;
    margin-left: 10px;

    .v-btn-mg {

        width: 50px;

        .v-img-title-mg {
            transform: scale(0.4);

        }

    }
}

.facebook-footer {
    transform: scale(0.33);
}

.briefcase {
    transform: scale(0.35);
}




a {
    text-decoration: none;
}



.div-container-texts2 {
    display: none;
}


.schedule-icon {
    font-size: 75px;
}

.divider1 {
    margin-right: 20px;
}

.div-text-1 {
    color: #fff;
    font-family: humanst521-2;
}

.div-text-2,
.div-text-3 {
    color: #fff;
    font-family: humanst521_btroman;
    font-size: 18.5px;
    margin-bottom: 0;
}

.v-application p {
    margin-bottom: 0;
}

.title-mg1 {
    color: #fff;
    font-family: humanst521-2;

}

.div-container-texts1 {
    margin-bottom: 12px;
}



@media only screen and (max-width: 960px) {

    .columna1 {
        display: none;
    }

    .v-btn-footer {

        grid-row: 1/2;
        grid-column: 1/2;
        transform: scale(0.09);

        .img-png {
            transform: scale(0.9);
        }

    }

    .schedule-icon {
        font-size: 30px;
    }

    .divider1 {
        margin-right: 10px;

    }

    .columna2 {
        height: 100%;
        padding: 50px;
        grid-row: 1/2;
        grid-column: 2/3;

    }

    .columna3 {
        margin-top: 10px;
    }

    .div-container-texts1 {
        display: none;
    }

    .div-container-texts2 {
        display: flex;
        flex-direction: column;

        h3 {
            color: #fff;
            font-family: humanst521_btroman;
            font-size: 6.5px
        }

        h1 {
            color: #fff;
            font-family: humanst521-2;
            font-size: 6.5px
        }
    }

}
</style>