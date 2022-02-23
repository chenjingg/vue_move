<template>
  <div class='home-bg' id='bg'  ref='bg'>
    <div v-for='(item,index) in divList' :key='index' :class='item.id+" box"' >
      <div class='move-header' v-boxMove='(index)'>
        <div class='remove' @click='remove(item,index)'>x</div>
      </div>
      <div class='size-circle'  v-boxSize='(index)'></div>
    </div>
    <el-button @click='addParent'>添加</el-button>
  </div>
</template>

<script>

export default {
  mounted(){
  },
  data(){
    return{
      divList:[{id:'.box1'},{id:'.box2'},{id:'.box3'},{id:'.box4'},{id:'.box5'},]
    }
  },
  methods:{
    addParent(){
      this.divList.push({id:'.box'+Number(this.divList.length+1)})
    },
    remove(item,index){
      this.divList.splice(index,1)
    }
  },
  components:{},
  directives:{
    boxSize(circle,index){
      circle.onmousedown = function(e){
        e.stopPropagation()
        let box = document.querySelectorAll(".box")[index.value]
        let top = window.getComputedStyle(box).top.split('px')[0]
        let left = window.getComputedStyle(box).left.split('px')[0]
        document.onmousemove=function(e){
          box.style.width=(e.clientX-left)+'px'
          box.style.height=(e.clientY-top)+'px'
        }
        document.onmouseup = function(e){
              document.onmousemove = null;
              document.onmouseup = null;
          };
      }
    },
    boxMove(header,index){
      header.onmousedown = function(e){
        let box = document.querySelectorAll(".box")[index.value]
        let x = e.pageX - box.offsetLeft
				let y = e.pageY - box.offsetTop
        document.onmousemove=function(e){
          box.style.left=(e.clientX-x)+'px'
          box.style.top=(e.clientY-y)+'px'
        }
        document.onmouseup = function(e){
              document.onmousemove = null;
              document.onmouseup = null;
          };
      }
    }
  }
}
</script>

<style lang='scss'>
.home-bg{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  .box{
    width: 200px;
    height: 200px;
    border:1px solid red;
    top:100px;
    left: 100px;
    position: absolute;
    .remove{
      width:20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
    }
    .move-header{
      width:100%;
      height: 10%;
      border-bottom: 1px solid red;
      position: absolute;
      left:0;
      top:0;
      overflow: auto;
      cursor:move;
    }
    .size-circle{
      width:5px;
      height:5px;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      bottom:0;
      right:0;
      cursor:crosshair;
      //transform: translate(100%,100%);
    }
  }
}
  
</style>
    