const vm = Vue.createApp({
  data() {
    return {
      todos: [
        {
          name: 'Buy groceries',
          done: false
        },
        {
          name: 'Pay bills',
          done: true
        },
        {
          name: 'Take dogs for a walk',
          done: true
        },
      ],
      showTodos: true,
      sortOrder: 'ASC',
      onlyPaid: false,
      invoices: [
        {
          id: 2,
          item: 'Udemy Course',
          price: 9.99,
          paid: false
        },
        {
          id: 1,
          item: 'Book',
          price: 39.99,
          paid: true
        },
        {
          id: 3,
          item: 'MacBook Air',
          price: 599.99,
          paid: true
        }
      ]
    }
  },
  computed: {
    doneTodos() {
      // TO BE IMPLEMENTED
      return this.todos.filter(elem => elem.done);
    },
    paidInvoices() {
      // TO BE IMPLEMENTED
      return this.invoices.filter(elem => elem.paid);
    },
    sortedInvoices() {
      // TO BE IMPLEMENTED
      if(this.onlyPaid){
        return this.sortOrder == 'ASC' ? this.paidInvoices.sort((a, b) => a.id - b.id) : this.paidInvoices.sort((a, b) => b.id - a.id)
      }else{
        return this.sortOrder == 'ASC' ? this.invoices.sort((a, b) => a.id - b.id) : this.invoices.sort((a, b) => b.id - a.id)
      }
    }
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder == 'ASC' ? this.sortOrder = 'DESC' : this.sortOrder = 'ASC'
    }
  }

}).mount('#app');