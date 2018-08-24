<template>
    <div>
        <el-form ref="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="title1"></el-input>
            </el-form-item>
            <el-form-item label="链接">
                <el-input v-model="link1"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="author1"></el-input>
            </el-form-item>
            <el-form-item label="显隐">
                <el-select v-model="tag1" placeholder="请选择">
                <el-option label="显示" value="1"></el-option>
                <el-option label="隐藏" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addBlog">立即添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title1: "",
      link1: "",
      author1: "",
      tag1: ""
    };
  },
  methods: {
    addBlog() {
      this.$http
        .post("insertBlog", {
          title: this.title1,
          link: this.link1,
          author: this.author1,
          tag: this.tag1
        })
        .then(result => {
          var result = result.body;
          if (result.code === 200) {
            alert("添加成功！");
            this.title1 = "";
            this.link1 = "";
            this.author1 = "";
            this.tag1 = "";
          } else {
            // 失败了
            alert("添加失败！");
          }
        });
    }
  }
};
</script>
