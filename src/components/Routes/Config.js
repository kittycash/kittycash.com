import Home from '../Home';
import Downloads from '../Downloads';
import RoadmapPage from '../RoadmapPage';
import ExplorerPage from '../ExplorerPage';
import Soon from '../Soon';

export default {
  routes: [
    {path: "", component: Home, changefreq: 'weekly', priority: 1.0},
    {path: "explorekitties", component: ExplorerPage, changefreq: 'daily', priority: 1.0},
    {path: "whitekitties", component: Soon, changefreq: 'monthly', priority: 0.4},
    {path: "roadmap", component: RoadmapPage, changefreq: 'monthly', priority: 0.4},
    {path: "downloads", component: Downloads, changefreq: 'monthly', priority: 0.4},
    {path: "soon", component: Soon, changefreq: 'monthly', priority: 0.4}
  ],
  redirects: [
    {from: "whitekitties.html", to:"whitekitties"},
    {from: "downloads.html", to:"downloads"},
    {from: "faq.html", to:"faq"},
    {from: "index.html", to:""}
  ]
};