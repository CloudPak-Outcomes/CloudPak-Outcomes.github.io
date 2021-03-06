## Analyze and Monitor

![Analyze and monitor](./img/header.png)

In this lab, you will use **Watson OpenScale** to identify issues with a production machine learning model. You will then use **AutoAI** to rapidly prototype and evaluate a challenger model.

## 1. Import the project

Begin by downloading [the project zip file](https://github.com/CloudPak-Outcomes/Outcomes-Projects/raw/main/Employee-Attrition.zip). **DO NOT** unzip the file.

Sign in to your Cloud Pak for Data instance. From the home page, expand the menu at the top left and click **All projects**.

![Projects menu](./img/projects.png)

Click **New project**.

![New project](./img/new_project.png)

Select **Analytics project** and click **Next**.

Click on the **Create a project from a file** tile.

![Create project from file](./img/create_project_from_file.png)

On the **From file** tab, drag and drop the zip file you downloaded earlier to the **Upload file** portion of the page, or navigate to it on your hard drive. Give the project a name and click **Create**.

When the project creation process finishes, click the **View new project** button.

![View new project](./img/view_new_project.png)

## 2. Explore the OpenScale monitors

MBI already has a running predictive model to evaluate an employee attrition risk. However, with COVID-19 affecting commute time, amount of overtime worked, and many other features the model uses to predict which employees may leave the company, we should check and see how the model deals with this data drift.

Using the navigation menu, click on **Instances** in the **Services** section.

![Instances](./img/instances.png)

From the list of instances, locate OpenScale. Click the icon with three dots, and click **Open**.

![Open OpenScale](./img/open_openscale.png)

The OpenScale Insights Dashboard shows a quick overview of all the models currently being monitored. The model had been performing well, as shown by its quality score, but rapidly-changing conditions brought on by
COVID-19 may be affecting it. Click on the tile for the production model.

![Production model tile](./img/production_tile.png)

An alert is likely showing for the drift monitor, which indicates that OpenScale has detected a potential issue that could affect model accuracy. Click on the drift score.

![Drift score](./img/drift_score.png)

The graph shows a predicted drop in model accuracy based on the characteristics of the data being sent to the model. If the predicted drop is greater than the threshold we have configured for an alert (shown as
the red line), then an alert will appear on the dashboard. Click on a point on the graph for more information.

![Drift score](./img/drift_graph.png)

Select **Transactions responsible for drop in accuracy** to view which
characteristics are affecting the model.

![Transactions responsible for drop in accuracy](./img/transactions_responsible.png)

OpenScale has grouped the transactions based on which features are influencing the model, helping catch and fix issues in real time as the model makes predictions, and without the need for gathering additional
ground truth feedback data. Note that the amount of overtime and the commute time are listed as influencing many of the different groups.

These values are likely the new key drivers of our attrition problem, as the workers most affected by them are the warehouse employees.

![Transaction list](./img/transaction_list.png)

Now that we have discovered an issue with our model, we can try and improve it with new data.

## 3. Train a challenger model with AutoAI

Our production model is experiencing accuracy issues and is struggling to make good predictions in the new employment environment. We can use AutoAI to rapidly prototype a new model.

Navigate back to your project. From the **Assets** tab, click the **Add to project** button.

![Add to project](./img/add_to_project.png)

From the list of asset types, select **AutoAI experiment**.

![AutoAI experiment](./img/autoai_experiment.png)

Give your experiment a name and optional description and click **Create**.

Click **Select from project** for the data source.

![Add data source](./img/add_data_source.png)

From the list of assets, check the box next to **modeling\_records\_2020.csv** and click **Select asset**.

![Select asset](./img/select_asset.png)

Use the dropdown to set the **Prediction column** to **ATTRITION**. AutoAI analyzes the data and identifies this as a binary classification predictor that should optimize for the accuracy measurement.

Click the **Experiment settings** button.

![Experiment settings](./img/experiment_settings.png)

Use the slider to adjust the training data split to 85% and click **Save settings**.

![Training data split](./img/training_data_split.png)

Click **Run experiment** to run the experiment. It will likely take 3-5 minutes to run and generate all the pipelines.

When the experiment has finished, we can explore the pipelines to see their characteristics and any feature engineering or hyperparameter optimization performed by the model. A quick view is available by clicking on the caret before the rank. We can get more details by clicking on the pipeline row.

When you are ready, click the **Save as** button for the pipeline you would like to use.

![Save pipeline](./img/save_pipeline_as.png)

Select the **Model** tile. Note that you also have the option to save the pipeline as a notebook that uses industry-standard machine learning libraries to build the model. Data scientists can use these notebooks for further enhancements to the model, or to more fully understand exactly how the pipeline operates.

Click **Create**.

Once the model has been saved, click the breadcrumb to navigate back to your project.

![Project breadcrumb](./img/breadcrumb.png)

## 4. Deploy the challenger model

We will now deploy the new challenger model so that we can use OpenScale to evaluate it against our existing production model.

From the **Assets** tab of the project, scroll down to the **Models** section and click on the newly-saved model.

![Attrition 2020 model](./img/challenger_model.png)

Click on **Promote to deployment space**.

![Promote to deployment space](./img/promote_to_deployment_space.png)

When configuring machine learning providers in OpenScale, deployment spaces are designated as production or pre-production spaces. When we configure OpenScale to monitor this model, we will designate this space as a pre-production space.

Click the **New space** button.

![New deployment space](./img/new_space.png)

Give your space a distinct name, such as one that includes the beginning of your email address, and click **Create**. Once the space has been created, click **Close** to return to the model promotion screen.

Use the dropdown to select your new space as the target space, and click **Promote**.

![Target space](./img/target_preprod_space.png)

From the menu in the upper left corner of the screen, select **Deployments**.

![Deployments](./img/deployments.png)

From the **Spaces** tab on the deployments screen, click on the space you just created.

Locate the model from the list and click the rocket ship icon to deploy it.

![Deploy model](./img/deploy_preprod_model.png)

On the Create a deployment screen, select the **Online** tile and give your model a unique name. Click **Create**.

You can monitor the progress of your deployment from the **Deployments** tab. When the deployment has finished, you can proceed to the next step.

## 5. Configure OpenScale monitoring for the challenger model

Using the navigation menu, click on **Instances** in the **Services** section.

![Instances](./img/instances.png)

From the list of instances, locate OpenScale. Click the icon with three dots, and click **Open**.

![Open OpenScale](./img/open_openscale.png)

From the navigation on the left, click the **Configure** button.

![Configure OpenScale](./img/configure_openscale.png)

From the System setup screen, select **Machine learning providers** and click **Add machine learning provider**.

![Machine learning providers](./img/machine_learning_providers.png)

Click the pencil icon to edit the name of your new provider.

![Edit provider name](./img/edit_provider_name.png)

Name your provider **Attrition Preproduction Space** and click **Apply**. Then click the pencil icon in the **Connection** tile.

Select **Watson Machine Learning (V2)** from the **Service provider type** dropdown. In the **Deployment space** dropdown, select the deployment space you created for your challenger model in the previous step. Finally, select **Pre-production** as the **Environment type** and click **Save**.

![Machine learning provider details](./img/provider_details.png)

Click the navigation button to return to the Insights dashboard.

![Insights dashboard](./img/insights_dashboard.png)

Click the blue **Add to dashboard** button.

Use the Machine learning provider dropdown to select the pre-production provider you just created. The list of deployments below will auto-populate. Select the deployed challenger model and click **Configure**.

![Select model deployment](./img/select_model_deployment.png)

When the configuration has finished saving, click **Configure monitors**.

Click the pencil icon in the **Model input** tile.

![Model input](./img/model_input.png)

Use the dropdowns to select **Numerical/categorical** as the data type, and **Binary classification** as the algorithm type. Click **Save and continue**.

Click the pencil icon in the **Training data** tile.

Set the **Location** to **Cloud Object Storage**. Copy and paste the
following values into the
form:

| Field                | Value                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Resource instance ID | crn:v1:bluemix:public:cloud-object-storage:global:a/7d8b3c34272c0980d973d3e40be9e9d2:2883ef10-23f1-4592-8582-2f2ef4973639:: |
| API key              | yqcPbWZ0AQPHleHVerrR4Wx5e9pymBdMgydbEra5zCif                                                                                |

Click **Connect**.

Select **faststartlab???** from the list of buckets, and select
**hr\_attrition\_data\_2020.csv** from the list of data sets. Click
**Next**.

![Training data connection](./img/training_data_connection.png)

Select **ATTRITION** as the label column and click **Next**.

Ensure all features are selected as training features and click **Next**.

![All features](./img/all_features.png)

Use the dropdown to set the scoring method to **JSON payload**. Copy and paste the following into the contents box:

```
[
	{
		"request": {
			"fields": ["POSITION_CODE","DEPARTMENT_CODE","DAYS_WITH_COMPANY","COMMUTE_TIME","AGE_BEGIN_PERIOD","GENDER_CODE","PERIOD_TOTAL_DAYS","STARTING_SALARY","ENDING_SALARY","NB_INCREASES","BONUS","NB_BONUS","VACATION_DAYS_TAKEN","SICK_DAYS_TAKEN","PROMOTIONS","NB_MANAGERS","DAYS_IN_POSITION","DAYS_SINCE_LAST_RAISE","RANKING_CODE","OVERTIME","DBLOVERTIME","TRAVEL"],
			"values": [[3900.0,300.0,60.0,12.0,38.0,0.0,60.0,27500.0,27500.0,0.0,0.0,0.0,0.0,2.0,0.0,1.0,60.0,60.0,3.0,0.0,0.0,0.0]]
		},
		"response": {
			"fields": ["POSITION_CODE","DEPARTMENT_CODE","DAYS_WITH_COMPANY","COMMUTE_TIME","AGE_BEGIN_PERIOD","GENDER_CODE","PERIOD_TOTAL_DAYS","STARTING_SALARY","ENDING_SALARY","NB_INCREASES","BONUS","NB_BONUS","VACATION_DAYS_TAKEN","SICK_DAYS_TAKEN","PROMOTIONS","NB_MANAGERS","DAYS_IN_POSITION","DAYS_SINCE_LAST_RAISE","RANKING_CODE","OVERTIME","DBLOVERTIME","TRAVEL","prediction","probability"],
			"values": [[3900.0,300.0,60.0,12.0,38.0,0.0,60.0,27500.0,27500.0,0.0,0.0,0.0,0.0,2.0,0.0,1.0,60.0,60.0,3.0,0.0,0.0,0.0,0, [0.9718800048430234, 0.028119995156976656]]]
		}
	}
]
```

Click **Send now**. When the payload has been accepted, click **Next**.

OpenScale has correctly identified the prediction and probability outputs. Click **Save**.

![Prediction and probability](./img/prediction_probability.png)

From the model details screen, select the **Drift** monitor.

![Drift monitor](./img/drift_monitor.png)

Click the pencil icon in the **Drift model** tile.

Select **Train in Watson OpenScale** as the training option and click **Next**.

![Train in OpenScale](./img/train_in_openscale.png)

Set the drift threshold to 5% and click **Next**. This will cause an alert to appear on our dashboard if the expected drop in accuracy due to drift is greater than 5%.

Set the sample size to **100** and click **Save**. Watson OpenScale will begin training a drift model in the background.

Next, click on the quality monitor.

![Quality monitor](./img/quality_monitor.png)

Click the pencil icon in the **Quality threshold** tile.

Leave the threshold value for Area under ROC set at **0.8** and click **Next**.

Set the minimum sample size to **100** and click **Save**.

You have successfully configured OpenScale monitoring for your challenger model. Click **Go to model summary** in the lower left corner to proceed.

![Go to model summary](./img/go_to_model_summary.png)

## 6. Compare the production and challenger models

Now that you have configured the monitors for the challenger model, you can submit test data to evaluate model performance.

Right click [this link](https://raw.githubusercontent.com/CloudPak-Outcomes/OpenScale-Data/main/Employee-Attrition/attrition_test_data_2020.csv) and save the file located here to your machine.

From the model summary screen, click the blue **Actions** button and select **Evaluate now**.

![Evaluate now](./img/evaluate_now.png)

From the **Import test data** window, select **from CSV file** from the dropdown. Drag the **attrition\_test\_data\_2020.csv** file you just downloaded to the window or navigate to it on your machine.

![Import test data](./img/from_csv.png)

Click **Upload and evaluate**. OpenScale uploads the test data and evaluates it for accuracy and drift using the parameters you completed in the previous section. Note that these tests make take a few minutes to run. When the evaluations have finished, the results will appear on the dashboard.

Take a moment to explore the results by clicking on the monitors. Note that, since this is a pre-production model, the most recent test results appear. For production models like the one we investigated earlier, evaluations are run regularly and the results are shown graphed over time intervals.

When you are finished exploring, return to the model summary screen. Click the blue **Actions** button and select **Compare**.

![Compare models](./img/compare.png)

From the dropdown, select the **predictive attrition - 2018** model.

![Model to compare](./img/model_to_compare.png)

OpenScale loads the most recent test results for the two models and displays them side-by-side. This comparison can be run between any two models, allowing you to quickly evaluate multiple challenger models against each other and against the production model as well.

Close the comparison window to return to the model summary. Note the other actions available from the blue **Actions** button. From here, you can view previous test results, see model information, mark the model as Approved for production, or re-configure the monitors.

You can also download a nicely-formatted PDF report that contains the model details, results of the most recent tests, and explanations of how the test scores are calculated.

![Download PDF](./img/download_pdf.png)

When you are finished, return to the **Employee attrition** project.

## 7. Modeling exploration with Modeler Flows

There are many options available in creating a model. The data we are using is divided in time peri-od and some records don???t cover the same number of days. Is it possible that by using rations of the number of days covered, we would get a better model?

We can do this additional experimentation on modeling without any programming. For this, we use **Modeler Flows** (SPSS Modeler) to derive new attributes to see if this improves the modeling. To have a proper comparison, we create two sets of models. One with the original values and one with derived values. The following figure shows what we want to achieve.

![Modeler flows outcome](./img/spss_outcome.png)

Note that the table nodes are not connected. They are required only if we want to save and use the models. In our case, we only need to generate the models and see how they perform. Keep this figure in mind while going through the instructions.

From within the project, click **Add to project**.

![Add to project](./img/add_to_project.png)

From the asset types, select **Modeler flow**.

![Modeler flow](./img/asset_types.png)

Name the flow **Testing Derived 2020** and click **Create**.

Open the **Import** section of the palette, then drag and drop a **Data Asset** node onto the canvas.

![Import data asset](./img/import_data_asset.png)

Open the data asset.

![Open data asset](./img/open_data_asset.png)

Click **Change data asset**.

![Change data asset](./img/change_data_asset.png)

Click **Data assets**, then select **modeling_records_2020.csv**.

Click **OK** and then **Save**.

Open the **Field Operations** in the Palette, then drag and drop a **Filter** node onto the canvas.

![Filter node](./img/filter_node.png)

Connect the two operators.

![Connect operators](./img/connect_operators.png)

Open the **Filter** the same way we did the **Import** operator earlier.

Click **Add Columns** and select the PERIOD\_TOTAL\_DAYS column.

![Filter columns](./img/filter_columns.png)

Click **OK**, then **Save**.

Open the **Field Operations** in the Palette, then drag and drop a **Type** node onto the canvas.

Connect the **Filter** node to the **Type** node.

Open the **Type** node and change the ATTRITION type from **Continuous** to **Flag**, then click **Save**.

![Attrition flag](./img/attrition_flag.png)

Open the **Field Operations** in the Palette, then drag and drop an **Auto Classifier** node onto the canvas.

![Auto classifier node](./img/auto_classifier_node.png)

Connect the **Type** node to the **Auto Classifier** node, and open the **Auto Classifier** node.

Click **Use custom field roles** and click **ATTRITION**.

![Use custom field roles](./img/use_custom_field.png)

Click **Add Columns**, and click the box next to **Field Names** to select all the fields.

![Select all fields](./img/select_all_fields.png)

Click **OK**, then **Save**. We have just completed a section that will create a model that is roughly equivalent to the AutoAI model we build in a previous step. Before we execute the flow, we will create a second model.

Open the **Field Operations** in the Palette, then drag and drop a **Derive** node onto the canvas.

Connect the **Input** node (the first node we created) to the **Derive** node and open the **Derive** node.

![Connect the derive node](./img/connect_derive_node.png)

Select **Multiple fields**.

![Multiple fields](./img/multiple_fields.png)

Click **Add Columns**, then select the following columns: BONUS, VACATION\_DAYS\_TAKEN, SICK\_DAYS\_TAKEN, OVERTIME, and DBLOVERTIME. Click **OK**.

Scroll down the **Derive** window and enter the following case-sensitive formula in the **Expression** field:
```
@FIELD / PERIOD_TOTAL_DAYS
```

![Derive forumal](./img/derive_formula.png)

Click **Save**.

Drag a **Filter** node onto the canvas and connect the **Derive** node to it.

Open the **Filter** node, click **Add Columns** and select the following fields: PERIOD\_TOTAL\_DAYS, BONUS, VACATION\_DAYS\_TAKEN, SICK\_DAYS\_TAKEN, OVERTIME, and DBLOVERTIME.

Click **OK**, then **Save**.

The next few steps are identical to the ones you performed on the previous model, starting with the **Type** node.

Drag and drop a **Type** node on the the canvas. Connect the **Filter** node to the **Type** node.

Change the ATTRITION type from **Continuous** to **Flag** and click **Save**.

Open the **Field Operations** in the Palette, then drag and drop an **Auto Classifier** node onto the canvas.

Connect the **Type** node to the **Auto Classifier** node.

Open the **Auto Classifier** node, click **Use custom field roles** and click ATTRITION.

Click **Add Columns**. Click the box next to **Field names** to select all fields. Click **OK** and **Save**.

At this point, your flow should look like this:

![Flow status](./img/flow_status.png)

We are ready to create the models. Click **Run**.

![Run](./img/run.png)

Click **View Model**.

![View model](./img/view_model.png)

You should see something similar to the following:

![Flow status 2](./img/flow_status_2.png)

We now need to do the same with the second model node. Click **Testing Derived 2020**.

![Testing Derived 2020](./img/testing_derived_2020.png)

View the models for the derived values by clicking **View Model**. The results will be similar to the following figure:

![Model results](./img/model_results.png)

In our case here, we see a small improvement with the use of derived values, a little less than 0.5%. We can then decide if the small improvement is worth pursuing or if other experiments are worthwhile. We can exit the modeler flow by simply clicking the project name. This completes the lab.

## Summary

Models require data that needs to be discovered, processed and analyzed. Once a model is created, it requires monitoring and will eventually need to be refreshed.

By completing this lab, you:

- Monitored a deployed model to discover issues
- Created and deployed a challenger model using AutoAI
- Configured OpenScale to monitor the new model and compare it to the previous model
- Used Modeler Flows to do additional modeling explorations

