<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item label="id">
                <el-input v-model="id" disabled></el-input>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="link"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="author"></el-input>
            </el-form-item>
            <el-form-item label="显隐">
                <el-select v-model="tag" placeholder="请选择">
                <el-option label="显示" value="1"></el-option>
                <el-option label="隐藏" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="updateBlog">立即修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      title: "",
      link: "",
      author: "",
      tag: ""
    };
  },
  created() {
    this.$http.get("getBlogById/" + this.$route.params.id).then(result => {
      // 注意： 通过 $http 获取到的数据，都在 result.body 中放着
      var result = result.body;
      if (result.code === 200) {
        // 成功了
        this.id = result.data.id;
        this.title = result.data.title;
        this.link = result.data.link;
        this.author = result.data.author;
        this.tag = result.data.tag;
      } else {
        // 失败了
        alert("获取数据失败！");
      }
    });
  },
  methods: {
    updateBlog() {
      this.$http
        .put("updateBlog", {
          id: this.id,
          title: this.title,
          link: this.link,
          author: this.author,
          tag: this.tag
        })
        .then(result => {
          var result = result.body;
          if (result.code === 200) {
            alert("修改成功！");
          } else {
            // 失败了
            alert("修改失败！");
          }
        });
    }
  }
};
</script>
