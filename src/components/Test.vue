<template>
	<div class="test">
		<h1>Test{{title}}</h1>
		<p>{{user.firstName}} {{user.lastName}}</p>
		<p v-text="user.firstName"></p>
		<p v-if="showName">{{user.firstName}}</p>
		<p v-else>Nobody</p>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
			
		</ul>
		<button v-on:click="greeting">say greeting</button>
		<input type="text" v-on:keyup.enter="enter">
		<input type="text" v-model="user.firstName">first name
		<input type="text" v-model="user.lastName">last name
		<div>{{fullName}}</div>
		<div>
			
			<h2>{{msg}}</h2>
		</div>
	</div>
</template>
<script>
	export default {
		name: "test",
		props:{
			msg:{
				type:String,
				default:"文字"
			}
		},
		data(){
			return {
				title: "hello vue.js!",
				user:{
					firstName:"andnana",
					lastName:"wang"
				},
				showName:true,
				items:[
					{title:"item1"},
					{title:"item2"},
					{title:"item3"}
				]

			}
		},
		methods:{
			greeting:function(){
				alert("hello world")
			},
			enter:function(){
				alert("fsdf")
				console.log("enter")
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " +this.user.lastName
			}
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