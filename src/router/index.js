
// import Home from "../pages/Home/Home"; // 首页
// import LifeRang from "../pages/LifeRang/LifeRang"; // 生活圈
// import My from "../pages/My/My"; // 我的
import ShopDetail from "../pages/Shop/ShopDetail"; // 商家详情


const router = [
    {
        name: 'ShopDetail',
        path: '/shopdetail',
        component: ShopDetail,
        exact: true
    }
]

export default router