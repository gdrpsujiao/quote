<template>
  <div class="home">
    <h1>报价计算器</h1>
    <!-- <h3>铁氟龙</h3> -->
    <div class="form-item">
      <span>形状</span>
      <v-radio-group :button="true" v-model="formData.shape" :list="shapeList" />
    </div>
    <section v-show="formData.shape === '板'">
      <div class="flex-sb">
        <div class="form-item">
          <span>长</span>
          <v-input v-model="formData.long" append="mm" />
        </div>
        <div class="form-item">
          <span>宽</span>
          <v-input v-model="formData.width" append="mm" />
        </div>
      </div>

      <div class="flex-sb">
        <div class="form-item">
          <span>高</span>
          <v-input v-model="formData.height" append="mm" />
        </div>
      </div>
    </section>
    <section v-show="formData.shape === '棒'">
      <div class="flex-sb">
        <div class="form-item">
          <span>直径</span>
          <v-input v-model="formData.diameter" append="mm" />
        </div>
        <div class="form-item">
          <span>长</span>
          <v-input v-model="formData.circleLong" append="mm" />
        </div>
      </div>
    </section>
    <div class="form-item">
      <span>密度</span>
      <v-input v-model="formData.density" />
    </div>
    <div class="form-item">
      <span>数量</span>
      <v-input v-model="formData.number" />
    </div>
    <div class="flex-sb">
      <div class="form-item">
      <span>成本单价</span>
      <v-input v-model="formData.cost" append="元" />
    </div>
    <div class="form-item">
      <span>单价</span>
      <v-input v-model="formData.price" append="元" />
    </div>
    </div>
    <div class="form-item">
      <span>总金额</span>
      <span class="money">{{ money }}</span>
    </div>
    <span class="label">数据：</span>
    <div class="table">
      <div class="tr">
        <span>单重量</span>
        <span>{{ result.weight }}</span>
      </div>
      <div class="tr">
        <span>总重量</span>
        <span>{{ result.allWeight }}</span>
      </div>
       <div class="tr">
        <span>单件成本</span>
        <span>{{ result.cost }}</span>
      </div>
       <div class="tr">
        <span>单件利润</span>
        <span>{{ result.profit }}</span>
      </div>
       <div class="tr">
        <span>总成本</span>
        <span>{{ result.allCost }}</span>
      </div>
      <div class="tr">
        <span>总利润</span>
        <span>{{ result.allProfit }}</span>
      </div>
    </div>

    <h2 class="page_bottom">
      你滑下来看我干嘛
      <br />
      还不回去
    </h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      formData: {
        shape: "板",
        long: "",
        width: "",
        height: "",
        diameter: "", // 直径
        circleLong: "",
        density: 1.2, // 密度
        price: "",
        cost: '',
        number: 1
      },
      // typeList: [
      //   {
      //     name: "铁氟龙",
      //     density: 2.4,
      //     price: 54
      //   }
      // ],
      shapeList: [
        {
          id: "棒",
          name: "棒"
        },
        {
          id: "板",
          name: "板"
        }
      ]
    };
  },
  computed: {
    money() {
      const { shape, long, width, height, density, number, price, diameter, circleLong, } = this.formData;
      let V 
      if(shape === '板') {
        V = long * width * height
      } else {
        V = (diameter/2.0)*(diameter/2.0)*3.14*circleLong
      }
      const weight = ((V * density) / 1000000.0).toFixed(5);
      const unitPrice = weight * price;
      const money = unitPrice * number;
      return money.toFixed(5);
    },
    weight() {
      const { shape, long, width, height, density, diameter, circleLong, } = this.formData;
      let V 
      if(shape === '板') {
        V = long * width * height
      } else {
        const radios = diameter/2.0
        V = radios*radios*3.14*circleLong
      }
      const weight = ((V * density) / 1000000.0).toFixed(5);
      return weight
    },
    result() {
      const { number, cost, price } = this.formData
      const allWeight = number*this.weight
      const resultCost = cost*this.weight
      const profit = (price-cost)*this.weight
      const allCost = number*resultCost
      const allProfit = number*profit
      return {
        weight: this.weight,
        allWeight,
        cost: resultCost,
        profit,
        allCost,
        allProfit
      }
    }
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 15px 50px;
  // width: 100vw;
  // min-height: 100vh;
  // overflow-y: auto;
  h1 {
    padding-bottom: 10px;
    text-align: center;
  }
  h3 {
    padding-bottom: 15px;
  }
  .form-item {
    padding-bottom: 10px;
    span:first-child {
      display: block;
      padding-bottom: 5px;
      font-weight: 500;
    }
  }
  .flex-sb {
    display: flex;
    justify-content: space-between;
    .form-item {
      width: calc(50% - 10px);
    }
  }
  .money {
    font-size: 24px;
    font-weight: bold;
    color: #f56c6c;
  }
  .label {
    display: block;
    padding: 10px 0;
    font-weight: bold;
    font-size: 20px;
  }
  .table {
    .tr {
      display: flex;
      padding-bottom: 10px;
      span {
        flex: 1;
      }
      span:first-child {
        color: #e6a23c;
      }
      span:last-child {
        color: #f56c6c;
        font-size: 20px;
      }
    }
  }
  .danger {
    color: #f56c6c;
  }
  .warning {
    color: #e6a23c;
  }
  .page_bottom {
    margin-top: 1000px;
    color: red;
    text-align: center;
  }
}
</style>