/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.uiext.inbox.InboxConstants");
sap.uiext.inbox.InboxConstants = function(){
};

sap.uiext.inbox.InboxConstants.prototype = jQuery.sap.newObject(sap.ui.base.Object.prototype);

sap.uiext.inbox.InboxConstants.mEntities = {
	taskMetadata: { 
		propertiesLabel: ["INBOX_TASK_TITLE","INBOX_FILTER_CREATION_DATE","INBOX_DUE_DATE","INBOX_STATUS","INBOX_PRIORITY"],
		properties: ["TaskTitle","CreatedOn","CompletionDeadLine","Status","Priority"],
		customAttributes: []
	}
};

sap.uiext.inbox.InboxConstants.TABLE_VIEW_TECH_NAMES = {
		INBOX_TABLE_VIEW_TASK_TITLE:"TaskTitle",
		INBOX_TABLE_VIEW_CREATION_DATE:"CreatedOn",
		INBOX_TABLE_VIEW_DUE_DATE:"CompletionDeadLine",
		INBOX_TABLE_VIEW_STATUS:"Status",
		INBOX_TABLE_VIEW_PRIORITY:"Priority"
};

sap.uiext.inbox.InboxConstants.tableViewImageSelected = "table_view_selected.png";
sap.uiext.inbox.InboxConstants.tableViewImageUnselected = "table_view_unselected.png";
sap.uiext.inbox.InboxConstants.rrViewImageSelected = "rr_view_selected.png";
sap.uiext.inbox.InboxConstants.rrViewImageUnselected = "rr_view_unselected.png";
sap.uiext.inbox.InboxConstants.filterViewImageSelected = "drilldown_filter_selected.png";
sap.uiext.inbox.InboxConstants.filterViewImageUnSelected = "drilldown_filter_unselected.png";
sap.uiext.inbox.InboxConstants.nxtBtnImage = "next.png";
sap.uiext.inbox.InboxConstants.prevBtnImage = "previous.png";
sap.uiext.inbox.InboxConstants.refreshImage = "refresh.png";
sap.uiext.inbox.InboxConstants.refreshImageGif = "refresh_ani.gif";
sap.uiext.inbox.InboxConstants.loaderImage = "loader_ani.gif";
sap.uiext.inbox.InboxConstants.completeImage = "complete_action.png";
sap.uiext.inbox.InboxConstants.claimImage = "claim_action.png";
sap.uiext.inbox.InboxConstants.releaseImage = "release_action.png";
sap.uiext.inbox.InboxConstants.forwardTaskImage = "forwardTask.png"
sap.uiext.inbox.InboxConstants.settingsImage = "settings_button_regular.png";
sap.uiext.inbox.InboxConstants.settingsImageHover = "settings_button_hover.png";
sap.uiext.inbox.InboxConstants.sapLogo = "sap_logo.gif";
sap.uiext.inbox.InboxConstants.taskInitiatorDefaultImage = "taskInitiator_default.png";
sap.uiext.inbox.InboxConstants.attachmentsImage = "attachment.png";
sap.uiext.inbox.InboxConstants.commentsImage = "comments.png";
sap.uiext.inbox.InboxConstants.customAttributesImage = "custom_attributes.png";
sap.uiext.inbox.InboxConstants.COLON = ":";
sap.uiext.inbox.InboxConstants.DOT = String.fromCharCode(183);//ASCII Character Middle DOT "·".
sap.uiext.inbox.InboxConstants.sortAscImage = "sort_asc.gif";
sap.uiext.inbox.InboxConstants.sortDescImage = "sort_desc.gif";
sap.uiext.inbox.InboxConstants.SPACE = " ";
sap.uiext.inbox.InboxConstants.EQUALS = "=";
sap.uiext.inbox.InboxConstants.taskCategoryImage = "task.png";
sap.uiext.inbox.InboxConstants.alertCategoryImage = "alert.png";
sap.uiext.inbox.InboxConstants.notificationCategoryImage = "notification.png";
sap.uiext.inbox.InboxConstants.rrViewAlertCategoryImage = "rr_view_alert.png";
sap.uiext.inbox.InboxConstants.rrViewNotificationCategoryImage = "rr_view_notification.png";

sap.uiext.inbox.InboxConstants.defaultView_URLParameter = "sap-ui-inbox-defaultView";

sap.uiext.inbox.InboxConstants.statusTooltip = {COMPLETED: "INBOX_FILTER_STATUS_COMPLETED",
   	READY: "INBOX_FILTER_STATUS_READY",
   	RESERVED: "INBOX_FILTER_STATUS_RESERVED",
   	IN_PROGRESS: "INBOX_FILTER_STATUS_IN_PROGRESS",
   	SELECTED: "INBOX_FILTER_STATUS_RESERVED",
   	STARTED: "INBOX_FILTER_STATUS_IN_PROGRESS",
   	COMMITTED : "INBOX_FILTER_STATUS_COMPLETED"
   	};

sap.uiext.inbox.InboxConstants.prioTooltip = {VERY_HIGH: "INBOX_FILTER_PRIORITY_VERY_HIGH",
		HIGH: "INBOX_FILTER_PRIORITY_HIGH",
		MEDIUM: "INBOX_FILTER_PRIORITY_MEDIUM",
		LOW: "INBOX_FILTER_PRIORITY_LOW",
		1: "INBOX_FILTER_PRIORITY_VERY_HIGH",
		2: "INBOX_FILTER_PRIORITY_VERY_HIGH",
		3: "INBOX_FILTER_PRIORITY_HIGH",
		4: "INBOX_FILTER_PRIORITY_HIGH",
		5: "INBOX_FILTER_PRIORITY_MEDIUM",
		6: "INBOX_FILTER_PRIORITY_LOW",
		7: "INBOX_FILTER_PRIORITY_LOW",
		8: "INBOX_FILTER_PRIORITY_LOW",
		9: "INBOX_FILTER_PRIORITY_LOW"};

sap.uiext.inbox.InboxConstants.statusImages = {COMPLETED: "completed_status.png",
			   	READY: "ready_status.png",
			   	RESERVED: "reserved_status.png",
			   	IN_PROGRESS: "inprocess_status.png",
			   	SELECTED: "reserved_status.png",
			   	STARTED: "inprocess_status.png",
			   	COMMITTED : "completed_status.png"};

sap.uiext.inbox.InboxConstants.prioImages = {VERY_HIGH: "very_high_priority.png",
   				HIGH: "high_priority.png",
   				MEDIUM: "medium_priority.png",
   				LOW: "low_priority.png",
   				1: "very_high_priority.png",
   				2: "very_high_priority.png",
   				3: "high_priority.png",
   				4: "high_priority.png",
   				5: "medium_priority.png",
   				6: "low_priority.png",
   				7: "low_priority.png",
   				8: "low_priority.png",
   				9: "low_priority.png"};

sap.uiext.inbox.InboxConstants.taskCategoryImages = {Task: "task.png", 
			Alert: "alert.png",
			Notification: "notification.png"
};

sap.uiext.inbox.InboxConstants.taskCategoryToolTip = {Task: "INBOX_TASK_CATEGORY",
		Alert: "INBOX_ALERT_CATEGORY",
		Notification: "INBOX_NOTIFICATION_CATEGORY"
};

sap.uiext.inbox.InboxConstants.messageTypeIcons = {error: "error.png",
	warning: "warning.png",
	success: "success.png",
	info: "Info.png"
	};
sap.uiext.inbox.InboxConstants.statusMap={
		COMPLETED: "INBOX_FILTER_STATUS_COMPLETED",
	   	READY: "INBOX_FILTER_STATUS_READY",
	   	RESERVED: "INBOX_FILTER_STATUS_RESERVED",
	   	IN_PROGRESS: "INBOX_FILTER_STATUS_IN_PROGRESS"
		
};

sap.uiext.inbox.InboxConstants.messageTypeToolTip = {error: "INBOX_MSG_STATUS_ERROR",
		warning: "INBOX_MSG_STATUS_WARN",
		success: "INBOX_MSG_STATUS_SUCCESS",
		info: "INBOX_MSG_STATUS_INFO"
		};

sap.uiext.inbox.InboxConstants.mRRSortMap = {li_creationDate: "sortByStartDate",
		li_status: "sortByStatus",
		li_taskTitle : "sortByTaskTitle"
		};

sap.uiext.inbox.InboxConstants.closeImg= "close_button.png";
sap.uiext.inbox.InboxConstants.closeHovImg= "close_hover.png";

sap.uiext.inbox.InboxConstants.aFilterMetaData = [
              {name: "INBOX_FILTER_TASK_TYPE", attributes: []},
 				{name: "INBOX_FILTER_PRIORITY", attributes: ["INBOX_FILTER_PRIORITY_LOW","INBOX_FILTER_PRIORITY_MEDIUM","INBOX_FILTER_PRIORITY_HIGH","INBOX_FILTER_PRIORITY_VERY_HIGH"]},
 				{name: "INBOX_FILTER_STATUS", attributes: ["INBOX_FILTER_STATUS_READY","INBOX_FILTER_STATUS_RESERVED","INBOX_FILTER_STATUS_IN_PROGRESS"]},
 				{name: "INBOX_FILTER_CREATION_DATE", attributes: ["INBOX_FILTER_DATETIME_TODAY","INBOX_FILTER_DATETIME_WEEK","INBOX_FILTER_DATETIME_15DAYS","INBOX_FILTER_DATETIME_MONTH"]},
 				{name: "INBOX_FILTER_DUE_DATETIME", attributes: ["INBOX_FILTER_DUE_DATETIME_TODAY","INBOX_FILTER_DUE_DATETIME_WEEK","INBOX_FILTER_DUE_DATETIME_15DAYS","INBOX_FILTER_DUE_DATETIME_MONTH"]}
 				];

sap.uiext.inbox.InboxConstants.rightAlignedTypes = ["java.lang.Integer", "java.math.BigDecimal", "java.lang.Long", "java.lang.Float"];
sap.uiext.inbox.InboxConstants.decisionOptionsFunctionImport = "DecisionOptions";
sap.uiext.inbox.InboxConstants.decisionExecutionFunctionImport = "Decision";
sap.uiext.inbox.InboxConstants.claimFunctionImport = "Claim";
sap.uiext.inbox.InboxConstants.releaseFunctionImport = "Release";

sap.uiext.inbox.InboxConstants.tableView = 'sap_inbox_list';
sap.uiext.inbox.InboxConstants.rowRepeaterView = 'sap_inbox_stream';
sap.uiext.inbox.InboxConstants.inboxViews = [sap.uiext.inbox.InboxConstants.tableView, sap.uiext.inbox.InboxConstants.rowRepeaterView];

sap.uiext.inbox.InboxConstants.customAction = "customAction";
sap.uiext.inbox.InboxConstants.sapOrigin = "SAP__Origin";

sap.uiext.inbox.InboxConstants.taskDefinitionDecisionOptionsMap = {};
sap.uiext.inbox.InboxConstants.oTaskDefinitionCustomAttributesMap = {};
sap.uiext.inbox.InboxConstants.oTaskInstanceCustomAttributeValuesMap = {};

sap.uiext.inbox.InboxConstants.forwardSlash = "/";
sap.uiext.inbox.InboxConstants.amperSand = "&";
sap.uiext.inbox.InboxConstants.query = "?";
sap.uiext.inbox.InboxConstants.formatJSONURLParam = "$format=json";
sap.uiext.inbox.InboxConstants.acceptHeaderforJSON = "application/json";
sap.uiext.inbox.InboxConstants.REFRESH_ON_DATE_PATTERN = "MMM dd, HH:mm";
sap.uiext.inbox.InboxConstants.FORWARD = "Forward";


sap.uiext.inbox.InboxConstants.customAttributeNavigationParam = "CustomAttributeData";
sap.uiext.inbox.InboxConstants.taskDefinitionNavigationParam = "TaskDefinitionData";


sap.uiext.inbox.InboxConstants.UserInfoCollection = "UserInfoCollection";

sap.uiext.inbox.InboxConstants.TaskDefinitionCollection = {
		entityName : "TaskDefinitionCollection",
	  	navParam : {
															   
	  				customAttrDefn : "CustomAttributeDefinitionData"
		},
		properties : {
			taskDefnID : "TaskDefinitionID"
		}
};

sap.uiext.inbox.InboxConstants.TaskCollection = {
		entityName :"TaskCollection",
		navParam : {
			   
				customAttrValues : "CustomAttributeData"
		},
		properties : {
				instanceID : "InstanceID"
		}
};


sap.uiext.inbox.InboxConstants.mEntitiesToElements = {
		taskMetadata: { 
			sap_inbox_list : {
				columnsMap : {
					TaskTitle : "TaskTitle",
					CreatedOn : "CreatedOn",
					CompletionDeadLine : "CompletionDeadLine",
					Status : "Status",
					Priority : "Priority"
				}
			},
			sap_inbox_stream: {
				sorterMap : {
					CreatedOn : "li_creationDate",
					TaskTitle : "li_taskTitle",
					Status	  : "li_status"
				}
			},
		}
	};
sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION= "Task";
sap.uiext.inbox.InboxConstants.PROPERTY_NAME_CUSTOM_STATUS= "StatusText";
