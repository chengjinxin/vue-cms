<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" v-for="item in goodslists" :key="item.id" to="/home/goodsInfo">
            <img src="" alt="item.img_url">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">&{{item.market_price}}</span>
                    <span class="old">&{{item.sell_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->

        <div class="goods-item" v-for="item in goodslists" :key="item.id" @click="godetail(item.id)">
            <img src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">&{{item.market_price}}</span>
                    <span class="old">&{{item.sell_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type='danger' size='large' @click='getmore'>加载更多...</mt-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pageindex:1,
                goodslists:[]
            }
        },
        created() {
            this.getgoodsList ()
        },
        methods:{
            getgoodsList () {
                this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result => {
                //    console.log(result) 
                    if(result.body.status === 0) {
                        // this.goodslists = result.body.message
                        this.goodslists = this.goodslists.concat(result.body.message)
                    }
                })
            },
            getmore () {
               this.pageindex++
               this.getgoodsList () 
            },
            godetail(id) {
                // console.log(this)
                this.$router.push('/home/goodsInfo/' + id)
            }
        }  
    }
</script>

<style lang="less">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
               .price {
                   .now {
                       color: red;
                       font-weight: bold;
                       font-size: 16px;
                   }
                   .old {
                       text-decoration: line-through;
                       font-size: 12px;
                       margin-left: left;
                   }
               }
               .sell {
                   display: flex;
                   justify-content: space-between;
                   font-size: 13px;
               } 
            }
        }
    }
</style>