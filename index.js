
const app = Vue.createApp({
    data: () => ({
        title: 'Academic panel',
        valueFromOption: '',
        firstTerm: true,
        secondTerm: true,
        thirdTerm: true,
        fourthTerm: true,
        fivethTerm: true,
        array: [
            {
                value:"showAll",
                term: 'Show all'
            },
            {
                value:"2019-2020.1term",
                term: '2019-2020y. (1 term)'
            },
            {
                value:"2019-2020.2term",
                term: '2019-2020y. (2 term)'
            },
            {
                value:"2020-2021.2term",
                term: '2020-2021y. (2 term)'
            },
            {
                value:"2021-2022.1term",
                term: '2021-2022y. (1 term)'
            },
            {
                value:"2021-2022.2term",
                term: '2021-2022y. (2 term)'
            },
        ],
        terms: [
            {
                term: '2019-2020y. (1 term)',
                code: 'INF 202',
                title: 'Database Management Systems 1',
                credit: '3',
                ect: '5',
                total: '23',
                grade: 'F'
            },
            {
                term: '2019-2020y. (2 term)',
                code: 'MAT 151 ',
                title: 'Linear Algebra ',
                credit: '3',
                ect: '5',
                total: '23',
                grade: 'F'
            },
            {
                term: '2020-2021y. (2 term)',
                code: 'MAT 153',
                title: 'Mathematics for Computer Science 1 ',
                credit: '3',
                ect: '5',
                total: '23',
                grade: 'F'
            },
            {
                term: '2021-2022y. (1 term)',
                code: 'INF 202',
                title: 'Probability and Mathematical Statictics ',
                credit: '3',
                ect: '5',
                total: '23',
                grade: 'F'
            },
            {
                term: '2021-2022y. (2 term)',
                code: 'INF 202',
                title: 'Physical Education 1 ',
                credit: '3',
                ect: '5',
                total: '23',
                grade: 'F'
            }
        ]
    }),
    methods: {
        showHandler() {
            let items = document.querySelectorAll('.main-block');
            const selectEl = document.querySelector('#termSelect')

            if(selectEl.selectedIndex === 0) {
                this.firstTerm = true
                this.secondTerm = true
                this.thirdTerm = true
                this.fourthTerm = true
                this.fivethTerm = true
                
            }
            else if(selectEl.selectedIndex === 1) {
                this.firstTerm = true
                this.secondTerm = false
                this.thirdTerm = false
                this.fourthTerm = false
                this.fivethTerm = false
            }
            else if(selectEl.selectedIndex === 2) {
                this.firstTerm = false
                this.secondTerm = true
                this.thirdTerm = false
                this.fourthTerm = false
                this.fivethTerm = false
            }
            else if(selectEl.selectedIndex === 3) {
                this.firstTerm = false
                this.secondTerm = false
                this.thirdTerm = true
                this.fourthTerm = false
                this.fivethTerm = false
            }
            else if(selectEl.selectedIndex === 4) {
                this.firstTerm = false
                this.secondTerm = false
                this.thirdTerm = false
                this.fourthTerm = true
                this.fivethTerm = false
            }
            else if(selectEl.selectedIndex === 5) {
                this.firstTerm = false
                this.secondTerm = false
                this.thirdTerm = false
                this.fourthTerm = false
                this.fivethTerm = true
            }
                    
        },
        showModal() {

        }
    }
})

app.component('show-modal', {
    data() {
        return {
            show: false,
            showTwo: false
        }
    },
    template: `
    <button @click="show = true">View details</button>
    <div class="modal-drop" v-if="show">
        <div class="modal-main">
            <div class="main-header">
                <button class="modal-buttons" @click="() => {showTwo = false; show = true}">Section 04 - Theory</button>
                <button class="modal-buttons" @click="() => {show = false; showTwo = true}">Section 18 - Practice</button>
            </div>
            <div class="main-body">
                <h3>Lyazat Naizabayeva, Doctor of Science <span>Section 04 - Theory </span></h3>
                <div class="main-main">
                    <div class="divs">
                        <ul>
                            <li>Assesment</li>
                            <li>Grades</li>
                            <li>Average</li>
                        </ul>
                    </div>
                    <div class="divs">
                        <ul>
                            <li>FIN: 40 / 100</li>
                            <li>58</li>
                            <li>58</li>
                        </ul>
                    </div>
                    <div class="divs">
                        <ul>
                            <li>FA: 60 / 100</li>
                            <li>0</li>
                            <li>0</li>
                        </ul>
                    </div>
                    <div class="divs divs-footer">
                        <ul>
                            <li>Total</li>
                            <li>23</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main-footer">
            <button @click="show = false">close</button>
            </div>
        </div>
    </div>
    <div class="modal-dropTwo" v-if="showTwo">
        <div class="modal-main">
            <div class="main-header-modal">
                <button class="modal-buttons" @click="() => {showTwo = false; show = true}">Section 04 - Theory</button>
                <button class="modal-buttons" @click="() => {show = false; showTwo = true}">Section 18 - Practice</button>
            </div>
            <div class="main-body">
                <h3>Alken Amandossov <span>Section 18 - Practice</span></h3>
                <div class="main-main">
                    <div class="divs">
                        <ul>
                            <li>Assesment</li>
                            <li>Grades</li>
                            <li>Average</li>
                        </ul>
                    </div>
                    <div class="divs">
                        <h5>There are no assessments in this section</h5>
                    </div>
                </div>
            </div>
            <div class="main-footer">
            <button @click="showTwo = false">close</button>
            </div>
        </div>  
    </div>
    


    
    `
})


app.mount('#app')