<template>
  <div class="container">
    <!-- 头部区域 -->
    <div id="zufang-header">
      <header>
        <ul class="header_wrap w">
          <li>
            <a href="javascript:;">首页</a>
          </li>
          <li>
            <a href="javascript:;">二手房</a>
          </li>
          <li>
            <a href="javascript:;">新房</a>
          </li>
          <li>
            <a class="active" href="javascript:;">租房</a>
          </li>
          <li>
            <a href="javascript:;">海外</a>
          </li>
          <li>
            <a href="javascript:;">小区</a>
          </li>
          <li>
            <a href="javascript:;">百科</a>
          </li>
          <li>
            <a href="javascript:;">房价</a>
          </li>
          <li>
            <a href="javascript:;">发布房源</a>
          </li>
          <li>
            <a href="javascript:;">下载APP</a>
          </li>
          <li>
            <a href="javascript:;">贝壳开放平台</a>
          </li>
          <li class="last_li">
            <img src="./images/user_icon.png" alt />
            <span>
              <a href="javascript:;">登录/</a>
            </span>
            <span>
              <a href="javascript:;">注册</a>
            </span>
          </li>
        </ul>
      </header>
    </div>
    <!-- 租房头部 -->
    <div class="search_area">
      <!-- 贝壳租房 -->
      <div class="beike_nav">
        <a href="/index">
          <img src="./images/logo.png" alt />
        </a>
        <ul class="beike_nav_tab">
          <li>
            <a class="current" href="#">首页</a>
          </li>
          <li>
            <a href="#">整租</a>
          </li>
          <li>
            <a href="#">合租</a>
          </li>
          <li>
            <a href="#">发布房源</a>
          </li>
          <li>
            <a href="#">下载APP</a>
          </li>
        </ul>
        <div class="search_wrap">
          <input type="text" placeholder="请输入区域、商圈或小区名开始找房" />
          <span class="search"></span>
        </div>
      </div>
    </div>
    <!-- 列表页 -->
    <div class="w">
      <el-breadcrumb class="bread_nav" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">杭州贝壳网</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/zufang' }">杭州租房</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 筛选区域 -->
    <div class="filter w">
      <div class="filter_wrap">
        <!-- 复选框 ul -->
        <!-- 按区域 -->
        <ul class="filter_item_way">
          <li>
            <a href="#">
              <span class="strong">按区域</span>
              <i class="el-icon-arrow-down"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">按地铁线</span>
              <i class="el-icon-arrow-up"></i>
            </a>
          </li>
        </ul>
        <!-- 不限 -->
        <ul class="filter_item_way area">
          <li>
            <a href="#">
              <span class="strong">不限</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">西湖</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">下城</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">江干</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">拱墅</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">上城</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">滨江</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">余杭</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">萧山</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">富阳</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">临安</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">钱塘新区</span>
            </a>
          </li>
        </ul>
        <!-- 不限 隐藏区-->
        <ul class="filter_item_way area hide" style="display: none;">
          <li>
            <a href="#">
              <span class="strong">不限</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">1号线(临平-湘湖)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">1号线(下沙江滨-湘湖)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">地铁2号线</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">地铁4号线</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="rail">地铁5号线</span>
            </a>
          </li>
        </ul>
        <!-- 方式 -->
        <ul class="area rentType">
          <li>
            <a href="#">
              <span class="strong">方式</span>
            </a>
          </li>
          <li class="rentType_active">
            <a href="#">
              <span class="rail">不限</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>整租</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>合租</span>
            </a>
          </li>
        </ul>
        <!-- 租金 -->
        <ul class="rentMoney">
          <li>
            <a href="#">
              <span class="strong rentMoney_b">租金</span>
              <template>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="≤1000元"></el-checkbox>
                  <el-checkbox label="1000-1500元"></el-checkbox>
                  <el-checkbox label="1500-2000元"></el-checkbox>
                  <el-checkbox label="2000-3000元"></el-checkbox>
                  <el-checkbox label="3000-4500元"></el-checkbox>
                  <el-checkbox label="≥4500元"></el-checkbox>
                </el-checkbox-group>
              </template>
            </a>
          </li>
          <el-input class="shadow"></el-input>-
          <el-input class="shadow"></el-input>元
          <span
            style="cursor: pointer; font-size: 12px; color: #3072f6; font-weight: 600; margin-left: 5px;"
          >确定</span>
        </ul>
        <!-- 户型 -->
        <ul class="rentMoney rentHouse">
          <li>
            <a href="#">
              <span class="strong rentMoney_b">户型</span>
              <template>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="一居"></el-checkbox>
                  <el-checkbox label="两居"></el-checkbox>
                  <el-checkbox label="三居"></el-checkbox>
                  <el-checkbox label="四居+"></el-checkbox>
                </el-checkbox-group>
              </template>
            </a>
          </li>
        </ul>
        <!-- 朝向 -->
        <ul class="rentMoney rentDirection">
          <li>
            <a href="#">
              <span class="strong rentMoney_b">朝向</span>
              <template>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="东"></el-checkbox>
                  <el-checkbox label="西"></el-checkbox>
                  <el-checkbox label="南"></el-checkbox>
                  <el-checkbox label="北"></el-checkbox>
                  <el-checkbox label="南北"></el-checkbox>
                </el-checkbox-group>
              </template>
            </a>
          </li>
        </ul>
      </div>
      <!-- 更多 -->
      <div class="more">
        <a href="#">
          更多
          <i class="el-icon-arrow-down"></i>
        </a>
      </div>
    </div>
    <!-- 内容区域  content -->
    <div class="content w">
      <div class="content_article">
        <!-- 搜索结果 -->
        <p>
          已为您找到
          <span class="houseNum">48507</span> 套
          <a href="/zufang">杭州租房</a>
        </p>
        <span class="clearIf">
          <a href="#">清空条件</a>
        </span>
      </div>
    </div>
    <!-- 内容区域  end -->
  </div>
</template>

<script>
import "./zufang.css";
export default {
  name: "rentHouse",
  data() {
    return {
      checkList: []
    };
  },

  created() {},

  methods: {}
};
</script>

<style scoped lang='less'>
</style>
