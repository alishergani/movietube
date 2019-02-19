<template>
  <div class="movies">
    <h2 class="title">Title: {{ feed.title }}</h2>
    <h2 class="author" v-if="feed">Author: {{ feed.author.name }}</h2>
    <span class="location">{{ feed.country }}</span>
    <div class="list">
      <a class="item" v-for="item in feed.results" :href="item.url">
        <div class="wrapper">
          <div class="content">
            <h5>{{ item.name }}</h5>
            <span>{{ item.artistName }}</span>
          </div>
          <div class="poster">
            <img :src="item.artworkUrl100" :alt="item.artistName">
          </div>
        </div>
        <div class="genres">
          <div class="genre" v-for="genre in item.genres">{{ genre.name }}</div>
        </div>
      </a>
    </div>

    <div class="copy">
      <i>{{ feed.copyright }}</i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      feed: null
    }
  },
  mounted() {
    axios.get('http://localhost:7777')
      .then(data => {
        this.feed = data.data.feed
        console.log(this.feed)
      })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movies {
  position: relative;
  padding: 20px;
}
.title {
  margin: 10px 0;
}
.location {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #2c3e50;
  border-radius: 2px;
  margin: 10px;
  padding: 5px;
}
.copy {
  text-align: right;
  padding: 10px;
  i {
    font-size: 12px;
  }
}
.list {
  margin-top: 30px;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  .item {
    display: block;
    flex-basis: 1;
    padding: 5px;
    margin: 0px 5px 5px 0px;
    border-radius: 4px;
    border: 1px solid #343434;
    cursor: pointer;
    transition: .05s;
    &:hover {
      background-color: #2c3e50;
      color: #fff;
    }
    .wrapper {
      display: flex;
    }
    .poster {
      margin-left: auto;
      padding: 5px 10px;
      img {
        width: 30px;
      }
    }
    .genres {
      display: flex;
      flex-wrap: wrap;
      margin: 5px 0;  
      .genre {
        border: 1px solid #eee;
        border-radius: 2px;
        flex-grow: 1;
        font-size: 12px;
        margin: 0 5px 0 0 ;
        padding: 5px;
        &:hover {
          border-color: #000;
          color: #000;
        }
      }
    }
  }
}
</style>
