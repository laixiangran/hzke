<template>
  <div class="container">
    <!-- 头部区域 -->
    <div id="zufang-header">
      <header>
        <ul class="header_wrap w" v-for="(item, index) in headerList" :key="index">
          <li>
            <a @click="highLight(index)" :class="activeIndex === index ? 'active' : '' " href="javascript:;">{{item}}</a>
          </li>
        </ul>
        <ul class="header_wrap">
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
        <!-- 点击更多 显示下边 -->
        <!-- 按区域 -->
        <ul class="filter_item_way">
          <li>
            <a href="#">
              <span :class="active ? 'strong' : ''" @click="areaClick">按区域</span>
              <i :class="active ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span :class="!active ? 'strong' : ''" @click="railClick">按地铁线</span>
              <i :class="active ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"></i>
            </a>
          </li>
        </ul>
        <!-- 不限 -->
        <ul class="filter_item_way area buxian">
          <li @click="clickBuxian(index)" v-for="(item, index) in data" :key="index">
            <router-link to="/zufang">
              <span :class="index == way ? 'strong' : ''">{{item}}</span>
            </router-link>
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
          <li @click="styleClick(index)" v-for="(item, index) in styles" :key="index">
            <a href="#">
              <span :class="index == waySum ? 'strong' : ''">{{item}}</span>
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
        <ul class="rentMoney rentDirection hide">
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
        <!-- 点击收起 -->
        <!-- 品牌 -->
        <div :style="more ? 'display: none': 'display:block'">
          <ul class="rentMoney clearfix">
            <li>
              <a href="#">
                <span class="strong rentMoney_b">品牌</span>
                <template>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="链家"></el-checkbox>
                    <el-checkbox label="自如"></el-checkbox>
                    <el-checkbox label="魔方公寓"></el-checkbox>
                    <el-checkbox label="城家公寓"></el-checkbox>
                    <el-checkbox label="泊寓"></el-checkbox>
                    <el-checkbox label="初九公寓"></el-checkbox>
                    <el-checkbox label="奥通公寓"></el-checkbox>
                  </el-checkbox-group>
                </template>
              </a>
            </li>
          </ul>
          <!-- 特色 -->
          <ul class="rentMoney clearfix">
            <li>
              <a href="#">
                <span class="strong rentMoney_b">特色</span>
                <template>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="近地铁"></el-checkbox>
                    <el-checkbox label="拎包入住"></el-checkbox>
                    <el-checkbox label="精装修"></el-checkbox>
                    <el-checkbox label="押一付一"></el-checkbox>
                    <el-checkbox label="新上"></el-checkbox>
                    <el-checkbox label="认证公寓"></el-checkbox>
                    <el-checkbox label="随时看房"></el-checkbox>
                    <el-checkbox label="VR房源"></el-checkbox>
                    <el-checkbox label="业主自荐"></el-checkbox>
                  </el-checkbox-group>
                </template>
              </a>
            </li>
          </ul>
          <!-- 租期 -->
          <ul class="rentMoney clearfix">
            <li>
              <a href="#">
                <span class="strong rentMoney_b">租期</span>
                <template>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="月租"></el-checkbox>
                    <el-checkbox label="年租"></el-checkbox>
                    <el-checkbox label="一个月起租"></el-checkbox>
                    <el-checkbox label="1-3个月"></el-checkbox>
                    <el-checkbox label="4-6个月"></el-checkbox>
                  </el-checkbox-group>
                </template>
              </a>
            </li>
          </ul>
          <!-- 楼层 -->
          <ul class="rentMoney clearfix">
            <li>
              <a href="#">
                <span class="strong rentMoney_b">楼层</span>
                <template>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="低楼层"></el-checkbox>
                    <el-checkbox label="中楼层"></el-checkbox>
                    <el-checkbox label="高楼层"></el-checkbox>
                  </el-checkbox-group>
                </template>
              </a>
            </li>
          </ul>
          <!-- 电梯 -->
          <ul class="rentMoney rentElevator clearfix">
            <li>
              <a href="#">
                <span class="strong rentMoney_b">电梯</span>
                <template>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="无电梯"></el-checkbox>
                    <el-checkbox label="有电梯"></el-checkbox>
                  </el-checkbox-group>
                </template>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 更多 -->
      <div class="more">
        <a href="javascript:;" @click="moreClick">
          更多
          <i class="el-icon-arrow-down"></i>
        </a>
      </div>
    </div>
    <!-- 内容区域  content -->
    <div class="content w">
      <!-- 内容左边 -->
      <div class="content_article">
        <!-- 搜索结果 -->
        <div class="content__title">
          已为您找到
          <span class="houseNum">49082</span>套 杭州租房
          <a href="#" class="clearIf">清空条件</a>
        </div>
        <!-- 综合排序 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="综合排序" name="first">
            <!-- 房源列表 -->
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <div class="content_list">
              <div class="houseImages">
                <a href="#">
                  <img src="./images/house.jpg" alt="整租·丁桥大唐苑 2室1厅 南_丁桥大唐苑租房" />
                </a>
              </div>
              <div class="content_list_main">
                <p class="itemTitle">
                  <a href="#">整租·丁桥大唐苑 2室1厅 南</a>
                </p>
                <p class="itemDes">
                  <a href="#">江干-丁桥-丁桥大唐苑 / 66㎡ /南 / 2室1厅1卫</a>
                </p>
                <p class="itemTag oneline">
                  <i class="itemTagList">精装</i>
                  <i class="itemTagList">随时看房</i>
                </p>
                <p class="itemBrand">
                  <span class="brand">贝壳优选</span>
                  <span class="time">
                    <img src="./images/time.png" alt />
                    2个月前维护
                  </span>
                </p>
                <span class="itemPrice">
                  <em>2800</em>
                  元/月
                </span>
              </div>
            </div>
            <!-- 分页功能 -->
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="100">
              </el-pagination>
            <!-- 房源列表  等着循环遍历 -->
          </el-tab-pane>
          <el-tab-pane label="最新上架" name="second">最新上架</el-tab-pane>
          <el-tab-pane label="价格" name="third">价格</el-tab-pane>
          <el-tab-pane label="面积" name="fourth">面积</el-tab-pane>
        </el-tabs>
      </div>
      <!-- 内容右边 -->
      <div class="content_aside">
        <div class="codePic">
          <div class="erweima">
            <img src="./images/getDownloadQr.png" alt />
          </div>
          <div class="app">下载贝壳APP</div>
          <div class="text">
            <p>扫描上方二维码</p>
            <p>随时查看新房源</p>
            <p class="getMore">
              <a href="#">了解更多</a>
              <span>></span>
            </p>
          </div>
        </div>
        <div class="codePic">
          <div class="erweima">
            <img src="./images/zixun.jpeg" alt />
          </div>
          <div class="app">扫描微信咨询</div>
        </div>
        <!-- 热推房源 -->
        <div class="recommend_list">
          <p class="houseResource">热推房源</p>
          <div class="recommend_item">
            <a href="javascript:;">
              <img src="./images/house01.png" alt="">
              <p class="title">整租 · 丁桥兰苑</p>
              <p class="des">江干/2室1厅1卫</p>
              <p class="price">3500元/月</p>
            </a>
          </div>
        </div>
        <div class="recommend_list">
          <p class="houseResource">热推房源</p>
          <div class="recommend_item">
            <a href="javascript:;">
              <img src="./images/house01.png" alt="">
              <p class="title">整租 · 丁桥兰苑</p>
              <p class="des">江干/2室1厅1卫</p>
              <p class="price">3500元/月</p>
            </a>
          </div>
        </div>
        <div class="recommend_list">
          <p class="houseResource">热推房源</p>
          <div class="recommend_item">
            <a href="javascript:;">
              <img src="./images/house01.png" alt="">
              <p class="title">整租 · 丁桥兰苑</p>
              <p class="des">江干/2室1厅1卫</p>
              <p class="price">3500元/月</p>
            </a>
          </div>
        </div>
        <div class="recommend_list">
          <p class="houseResource">热推房源</p>
          <div class="recommend_item">
            <a href="javascript:;">
              <img src="./images/house01.png" alt="">
              <p class="title">整租 · 丁桥兰苑</p>
              <p class="des">江干/2室1厅1卫</p>
              <p class="price">3500元/月</p>
            </a>
          </div>
        </div>
        <!-- 热推房源  等着遍历 -->
      </div>
    </div>
    <!-- 内容区域  end -->
    <!-- 底部 -->
    <footer>
      <div class="footer_main w">
        <h3>网站地图</h3>
        <div class="footer_middle">
          <!-- 切换 -->
          <ul class="fatherList" @click="footerMap(index)" v-for="(item, index) in fatherList" :key="index">
            <li><a :class="index == remen ? 'cur' : ''" href="javascript:;">{{item}}</a></li>
          </ul>
        </div>
        <div class="footer_bottom">
          <!-- 内容 -->
          <div class="sonList">
            <hotShopping v-if="isShow==0"></hotShopping>
            <commendPlots v-else-if="isShow==1"></commendPlots>
            <rentCity v-else />
          </div>
          <a href="#">天津小屋信息科技有限公司 | 津ICP备18000836号 | © Copyright © 2020 ke.com版权所有</a>
        </div>
      </div>
    </footer>
    
    <div class="carousel w">
      <el-carousel direction="vertical" indicator-position="outside" :interval="2000">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}
            123
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import hotShopping from './component/hotShoping'
import commendPlots from './component/commendPlots'
import rentCity from './component/rentCity'
export default {
  name: "rentHouse",
  data() {
    return {
      isShow: 0,
      activeIndex: 3,
      headerList: ['首页','二手房','新房','租房','海外','小区','百科','房价','发布房源','载APP','贝壳开放平台'],
      active: true,
      checkList: [],
      data: [
        "不限",
        "西湖",
        "下城",
        "江干",
        "拱墅",
        "上城",
        "滨江",
        "余杭",
        "萧山",
        "富阳",
        "临安",
        "钱塘新区"
      ],
      way: 0,
      styles: ["方式", "不限", "整租", "合租"],
      waySum: 1,
      more: true,
      activeName: "first",
      // 分页功能
      currentPage: 10,
      total: 4,
      curIndex: '',
      fatherList: ['热门商圈', '推荐小区', '租房城市'],
      remen: 1,
      interval: ''
    }
  },
    components: {
      hotShopping,
      commendPlots,
      rentCity,
    },
  created() {},

  methods: {
    highLight (index) {
      this.activeIndex = index
    },
    areaClick() {
      this.active = true
      this.data = [
        "不限",
        "西湖",
        "下城",
        "江干",
        "拱墅",
        "上城",
        "滨江",
        "余杭",
        "萧山",
        "富阳",
        "临安",
        "钱塘新区"
      ]
    },
    railClick() {
      this.active = false;
      this.data = [
        "不限",
        "1号线(临平-湘湖)",
        "1号线(下沙江滨-湘湖)",
        "地铁2号线",
        "地铁4号线",
        "地铁5号线"
      ]
    },
    clickBuxian(index) {
      this.way = index
    },
    styleClick(index) {
      if (index == 0) {
        return true
      }
      this.waySum = index
    },
    moreClick() {
      this.more = !this.more
    },
    footerMap (index) {
      this.remen = index
      this.isShow = index
    }
  }
}
</script>

<style scoped lang='less'>
@import "./zufang.css";

</style>
