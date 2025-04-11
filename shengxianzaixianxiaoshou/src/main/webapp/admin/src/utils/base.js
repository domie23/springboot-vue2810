const base = {
    get() {
        return {
            url : "http://localhost:8080/shengxianzaixianxiaoshou/",
            name: "shengxianzaixianxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shengxianzaixianxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "生鲜在线销售系统"
        } 
    }
}
export default base
