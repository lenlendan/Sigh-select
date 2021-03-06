import overall from "../src/pages/overall.vue"
var routes = [{
        path: "/",
        redirect: "/overall"
    },
    {
        name: "overall",
        path: "/overall",
        component: overall
    },
    {
        name: "college",
        path: "/college",
        component: {
            template: `<h1>高校</h1>`
        }
    },
    {
        name: "major",
        path: "/major",
        component: {
            template: `<h1>综合</h1>`
        }
    }
]
export default routes;