const { createApp } = Vue

createApp({
    data() {
        return {
            count: 0,
            id: 0
        }
    },
    methods: {
        increase()
        {
            this.count++
        },
        decrease()
        {
            this.count--
        },
        cnt_print()
        {
            alert(this.count)
        },
        msg1()
        {
            alert("We recommend you to read all articles on this website")
        },
        msg2()
        {
            alert("You should read our articles about web technologies.")
        },
        msg3()
        {
            alert("Can you give us a feedback?")
        },
        toggle()
        {
            this.id = 0
        },
        toggle1()
        {
            this.id = 1
        },
        toggle2()
        {
            this.id = 2
        },
        toggle3()
        {
            this.id = 3
        },
        toggle4()
        {
            this.id = 4
        },
        toggle5()
        {
            this.id = 5
        },
        toggle6()
        {
            this.id = 6
        },
        toggle7()
        {
            this.id = 7
        },
        toggle8()
        {
            this.id = 8
        },
        toggle9()
        {
            this.id = 9
        },
        toggle10()
        {
            this.id = 10
        },
        toggle11()
        {
            this.id = 11
        },
        toggle12()
        {
            this.id = 12
        },
    }
}).mount('#app')