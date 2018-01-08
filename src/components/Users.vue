<template>
	<div class="users">
	<h1>users</h1>
	<ul>
			<li v-for="user in users">{{user.username}}->{{user.email}}</li>
			
		</ul>
		<h1>works</h1>
			<ul>
			<li v-for="(work, index) in works" v-bind="index">{{work.category.categoryName}}->{{work.salary}}</li>
		
		</ul>
	</div>
</template>
<script>
	import $ from 'jquery'
	export default {
		name: "users",
	
		data(){
			return {
			users:[
					{username:"username1", email:"username1@163.com"},
					{username:"username2", email:"username2@163.com"},
					{username:"username3", email:"username3@163.com"}
				],
			works:[
					{username:"username1", email:"username1@163.com"},  
					{username:"username2", email:"username2@163.com"},
					{username:"username3", email:"username3@163.com"}
				]
			}
		},
		methods:{
		
		},
		created:function(){
			this.$http.get("https://jsonplaceholder.typicode.com/users",{
        // employeeopenid: 'oDsIf0XaW9-XrkTC_KP3AH8kaF1I',
        // bossopenid: 'oDsIf0YK8VAmcS0UqYWBcWhW0asE'
      }).then(function(response){
				console.log(response.data)
				this.users = response.data
			})
			    // var self = this 
		    // $.ajax({ 
		    //   url: 'https://jsonplaceholder.typicode.com/users', 
		    //   type: 'GET', 
		    //   dataType: 'JSONP', 
		    //   success: function (res) { 
		    //   	console.log(res)
		    //     // self.data = res.data.slice(0, 3) 
		    //     // self.opencode = res.data[0].opencode.split(',') 
		    //   } 
		    // })

    // $.ajax({ 
		  //     url: 'http://localhost:8082/MyNews/getworklist.action', 
		  //     type: 'GET', 
		  //     dataType: 'JSONP', 
		  //     data:{employeeopenid: "oDsIf0XaW9-XrkTC_KP3AH8kaF1I",bossopenid: "oDsIf0YK8VAmcS0UqYWBcWhW0asE"},
		  //     jsonp:"callback",
		  //     jsonpCallback:"handle",

		  //     success: function (res) { 
		  //     	console.log("dfeer")
		  //     	console.log(res)
		  //     	console.log("ggdg")
		  //     	console.log(this.users)
		  //     	this.works = res
		  //     	console.log(this.works)
		  
		  //     } ,  
    //          error:function(XHR, textStatus, errorThrown){
    //          	console.log(errorThrown)
    //          	console.log(textStatus)
    //              return false;
    //          }
		  //   })		    
		
			this.$http.jsonp("http://localhost:8082/MyNews/getworklist.action",
	      {//请求参数
	        params: {
	          employeeopenid: "oDsIf0XaW9-XrkTC_KP3AH8kaF1I",bossopenid: "oDsIf0YK8VAmcS0UqYWBcWhW0asE"
	        },
	        jsonp:'callback',
	        jsonpCallback:"handle"
	      }).then(function(res){
	        console.log(res)
	        this.works = JSON.parse(res.bodyText)
      		console.log(this.works)
      		 // this.works = JSON.parse(res.bodyText)
	      },function(){
	        //console.log(1)
	       
	      });
 
		}
	}
</script>
<style scoped>
	
	.red{
		background-color: red
	}
	.green{
		background-color: green
	}
</style>