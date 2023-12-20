//@ui5-bundle geo/aprobacionlog/Component-preload.js
sap.ui.require.preload({
	"geo/aprobacionlog/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","geo/aprobacionlog/model/models"],function(e,i,o){"use strict";return e.extend("geo.aprobacionlog.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(o.createDeviceModel(),"device")}})});
},
	"geo/aprobacionlog/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(o){"use strict";return o.extend("geo.aprobacionlog.controller.App",{onInit(){}})});
},
	"geo/aprobacionlog/controller/ViewItems.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("geo.aprobacionlog.controller.ViewItems",{onInit:function(){}})});
},
	"geo/aprobacionlog/i18n/i18n.properties":'# This is the resource bundle for geo.aprobacionlog\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Log de recepci\\u00f3n y aprobaci\\u00f3n \n\n#YDES: Application description\nappDescription=\n#XTIT: Main view title\ntitle=Log de recepci\\u00f3n y aprobaci\\u00f3n\n\n#Filtros\nEbeln=PO\nlifnr=Proveedor\nernam=Creador PO\nbedat=Fecha documento\nwerks=Centro\n\n#Items\nEbelnItem=N\\u00b0 de PO\nLiberadores=Liberadores\nEstadolib=Estado liberaci\\u00f3n\nFechacre=Fecha creaci\\u00f3n\nFechalib=Fecha liberaci\\u00f3n\ndelay=Delay\n\nflpTitle=Log de recepci\\u00f3n y aprobaci\\u00f3n\n\nflpSubtitle=\n',
	"geo/aprobacionlog/manifest.json":'{"_version":"1.17.0","sap.app":{"id":"geo.aprobacionlog","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.11.0","toolsId":"9104bea2-3710-4498-b10b-6bb2918fa2cd"},"dataSources":{"mainService":{"uri":"sap/opu/odata/sap/ZGW_LOG_APROBACION_SRV/","type":"OData","settings":{"annotations":["annotation"],"localUri":"localService/metadata.xml","odataVersion":"2.0"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"crossNavigation":{"inbounds":{"aprobacionlog-display":{"semanticObject":"aprobacionlog","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.71.58","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"geo.aprobacionlog.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"geo.aprobacionlog.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteViewItems","pattern":":?query:","target":["TargetViewItems"]}],"targets":{"TargetViewItems":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"ViewItems","viewName":"ViewItems"}}},"rootView":{"viewName":"geo.aprobacionlog.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"geoaprobacionlog"}}',
	"geo/aprobacionlog/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"geo/aprobacionlog/view/App.view.xml":'<mvc:View controllerName="geo.aprobacionlog.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"geo/aprobacionlog/view/ViewItems.view.xml":'<mvc:View\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:smartFilterBar="sap.ui.comp.smartfilterbar"\n\txmlns:smartTable="sap.ui.comp.smarttable"\n\txmlns:html="http://www.w3.org/1999/xhtml"\n\txmlns:app="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"\n\tcontrollerName="geo.aprobacionlog.controller.ViewItems"\n\theight="100%"\n><Page id="page" title="{i18n>title}"><content><smartFilterBar:SmartFilterBar\n\t\tid="smartFilterBar"\n\t\tentitySet="ZCDS_APROB_LOG"\n\t\tpersistencyKey="SmartFilter_Explored"\n\t\tbasicSearchFieldName="Ebeln"\n\t/><smartTable:SmartTable\n\t\tentitySet="ItemsAprobSet"\n\t\tsmartFilterId="smartFilterBar"\n\t\ttableType="ResponsiveTable"\n\t\tuseExportToExcel="true"\n\t\tbeforeExport="onBeforeExport"\n\t\tuseVariantManagement="true"\n\t\tuseTablePersonalisation="true"\n\t\theader="Items"\n\t\tshowRowCount="true"\n\t\tpersistencyKey="SmartTableAnalytical_Explored"\n\t\tenableAutoBinding="false"\n\t\tdemandPopin="true"\n\t\tclass="sapUiResponsiveContentPadding"\n\t\teditTogglable="false"\n\t/></content></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
