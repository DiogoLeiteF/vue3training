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
      return this.todos.filter(item => item.done);
    },
    paidInvoices() {
      // TO BE IMPLEMENTED
      return this.invoices.filter(invoice => invoice.paid);
    },
    sortedInvoices() {
      // TO BE IMPLEMENTED
      const list = this.onlyPaid ? this.paidInvoices : this.invoices
      if (this.sortOrder == "ASC") {
        return [...list].sort((a, b) => a.id - b.id);
      } else {
        return [...list].sort((a, b) => b.id - a.id);
      }
    },
  },
  methods: {
    toggleSortOrder() {
      // TO BE IMPLEMENTED
      if (this.sortOrder == "ASC") {
        this.sortOrder = "DESC"
      } else {
        this.sortOrder = "ASC";
      }
    }
  }
}).mount('#app');