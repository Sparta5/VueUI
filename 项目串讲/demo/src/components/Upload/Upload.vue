<template>
    <div class="upload">
        <h4>click to upload</h4> 
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Clouduploadstorage"></use>
        </svg>
       
        <input type="file" @change='uploadImg($event)'>

    
    </div>
</template>

<script>
export default {
    methods:{
        uploadImg(e){
         
        // formdata 格式
            var file = e.target.files[0];
            console.log(file)
            var imgData = new FormData();
            
            // imgData.append('uid','1');
            imgData.append('file',file,file.name); // 很重要！！！否则上传 undefined
           
            this.axios.post('http://localhost:4000/img_upload',imgData,
            {headers:{'Content-Type':'multipart/form-data'}}
            ).then(res=>{
                console.log(res)
            })
            .catch(err=>{console.log(err);
            })    

        }
    }
}
</script>

<style scoped>
    .icon{
        font-size: 30px;
        position: relative;
        z-index: 20;
    }
    input{
        position: relative;
        left:-100px;
        top:20px;
        z-index: 10;
        /* visibility: hidden; */
    }
    
</style>
