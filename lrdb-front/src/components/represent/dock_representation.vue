<style scoped>
.page-item {
  padding: 0;
}
.page-link {
  color: black;
}
.pagination {
  width: 100%;
}
</style>
<template>
  <div>
    <Page
      v-for="i in info"
      v-show="currentPage == i.index"
      :key="i.index"
      :info="i.info"
    />
    <div class="mt-3">
      <h6 class="text-center">Current page: {{ currentPage }}</h6>
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <span
            id="link-prev"
            class="page-link"
            @click="changePage(currentPage - 1)"
            >Previous</span
          >
        </li>
        <li v-for="n in pages" class="page-item" :key="n">
          <span class="page-link"
href="#" @click="changePage(n)">{{ n }}</span>
        </li>
        <li class="page-item">
          <span
            id="link-next"
            class="page-link"
            @click="changePage(currentPage + 1)"
            >Next</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Page from "./dock_page.vue";

const RESPONSE = [
  {
    id: 1,
    owner: 2,
    name: "Приложение 4 ознакомление",
    type: "docx",
    created: "2019-04-02T12:11:00.032709Z",
    last_update: "2018-02-04T12:11:00.032709Z",
    effect_date: "2020-04-08T12:11:00.032709Z",
    expiration_date: "2017-12-10T12:11:00.032709Z"
  },
  {
    id: 2,
    owner: 4,
    name: "Приложение 3 ознакомление",
    type: "png",
    created: "2016-04-05T12:11:00.032709Z",
    last_update: "2017-02-04T12:11:00.032709Z",
    effect_date: "2020-04-07T12:11:00.032709Z",
    expiration_date: "2014-04-04T12:11:00.032709Z"
  },
  {
    id: 3,
    owner: 8,
    name: "Приложение 2 ознакомление",
    type: "pdf",
    created: "2018-11-04T12:11:00.032709Z",
    last_update: "2017-04-04T12:11:00.032709Z",
    effect_date: "2020-01-04T12:11:00.032709Z",
    expiration_date: "2015-09-04T12:11:00.032709Z"
  },
  {
    id: 4,
    owner: 16,
    name: "Приложение 1 ознакомление",
    type: "docx",
    created: "2019-04-04T12:11:00.032709Z",
    last_update: "2018-04-04T12:11:00.032709Z",
    effect_date: "2020-03-04T12:11:00.032709Z",
    expiration_date: "2020-02-04T12:11:00.032709Z"
  }
];

export default {
  name: "Representation",
  components: {
    Page
  },
  props: {
    response: {
      default: function() {
        return RESPONSE;
      },
      type: Array
    },
    n_docks: {
      default: 2,
      type: Number
    }
  },
  data: function() {
    return {
      currentPage: 1
    };
  },
  computed: {
    info: function() {
      let index = 1;
      let i = 0;
      let result = [
        { index: 1, info: this.response.slice(i, i + this.n_docks) }
      ];
      for (i = this.n_docks; i < this.response.length; i += this.n_docks) {
        result.push({
          index: index + 1,
          info: this.response.slice(i, i + this.n_docks)
        });
        index++;
      }
      return result;
    },
    pages: function() {
      return this.info.length;
    }
  },
  methods: {
    changePage(pageNum) {
      if (pageNum > 0 && pageNum < this.pages + 1) {
        this.currentPage = pageNum;
      }
      // TODO: add disabled class
    }
  }
};
</script>
