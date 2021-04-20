## Analyze and Monitor

![Analyze and monitor](./img/banner.png)

*With Automated AI Lifecycle – Trust the model*

In this demo, you will show how **Watson OpenScale** can identify issues with a production machine learning model. You will then explore data engineering with Python notebooks in **Watson Studio** and rapid model prototyping in **AutoAI**. Finally, you will use OpenScale to compare production and challenger models.

## 1. Model monitoring

We have a running predictive model to evaluate an employee attrition risk. However, with COVID-19 affecting commute time, amount of overtime worked, and many other features the model uses to predict which employees may leave the company, we should check and see how the model deals with this data drift.

Click the menu in the upper left corner of the Cloud Pak for Data screen. Expand the **Services** section and click **Instances**.

![Instances](./img/instances.png)

From the list of instances, click the three dots for the **OpenScale** instance and select **Open**.

![OpenScale](./img/open_openscale.png)

OpenScale's **Insights dashboard** shows an overview of all models being monitored by the service. Each tile contains the results of the most recent tests run, with alerts if any of the measurements have fallen below the thresholds set by the administrator.

Locate and click on the tile for the **predictive attrition - 2018** model.

![Predictive attrition](./img/predictive_attrition_tile.png)

An alert is likely showing for the drift monitor, which indicates that OpenScale has detected a potential issue that could affect model accuracy. Click on the drift score.

![Drift score](./img/drift_score.png)

The graph shows a predicted drop in model accuracy based on the characteristics of the data being sent to the model over a specific time period. The predicted drop is greater than the threshold the administrator has configured for an alert, shown as the red line. Click on a point on the graph for more information.

![Drift graph](./img/drift_graph.png)

Select **Transactions responsible for drop in accuracy** to view which characteristics are affecting the model.

![Transactions responsible](./img/transactions_responsible.png)

OpenScale has grouped the transactions based on which features are influencing the model, helping catch and fix issues in real time as the model makes predictions, and without the need for gathering additional ground truth feedback data. Note that the amount of overtime and the commute time are listed as influencing many of the different groups. These values are likely the new key drivers of our attrition problem, as the workers most affected by them are the warehouse employees.

Now that we have identified that our current model is struggling to make predictions given the new conditions, we need to rapidly prototype and evaluate a replacement model.

## 2. Data engineering

Before we can get to creating models, we need to follow multiple steps described in the following diagram.

![Model lifecycle](./img/model_lifecycle.png)

The business problem has been defined and we’ve been through the data requirements, data collection, data understanding and data preparation.

The data has been catalogued and secured. Once the data was been better understood, we were able to identify the attributes needed. They are:

| POSITION\_CODE     | DEPARTMENT\_CODE      | DAYS\_WITH\_COMPANY      | COMMUTE\_TIME       |
| ------------------ | --------------------- | ------------------------ | ------------------- |
| AGE\_BEGIN\_PERIOD | GENDER\_CODE          | ATTRITION                | PERIOD\_TOTAL\_DAYS |
| STARTING\_SALARY   | ENDING\_SALARY        | NB\_INCREASES            | BONUS               |
| NB\_BONUS          | VACATION\_DAYS\_TAKEN | SICK\_DAYS\_TAKEN        | PROMOTIONS          |
| NB\_MANAGERS       | DAYS\_IN\_POSITION    | DAYS\_SINCE\_LAST\_RAISE | RANKING\_CODE       |
| OVERTIME           | DBLOVERTIME           | TRAVEL                   | NUMBER\_OF\_CLASSES |

There are a few things we need to know about these attributes. First the data comes from multiple tables. Some lookup tables were also used to identify the proper codes but were not needed to generate the data required.

![Data architecture](./img/data_architecture.png)

Second, many of these attributes refer to a specific timeframe. Either the timeframe of the analysis (calendar year), from the hiring date to the end date, or since the last raise or last promotion. Then, in the case of the employees that left, the main time period is one year prior to the termination date.

All this to say that collecting the attributes is complex. As a **data scientist**, we need to work with the **data engineering team** to make the data easily available. The data engineer generated a table, MODELING\_RECORDS, that includes the information requested. Then, the data engineer needs to **schedule regular jobs** to generate new records every year.

We saw in the previous step that our model needs to be refreshed using newer data to better fit reality. We have to consider that, because of COVID-19, many employees now work from home, so commute time is less of an issue for most employees. Additionally, COVID-19 has produced a huge surge in online orders, increasing the amount of overtime required for warehouse employees.

The model we want to create is an attrition model. To create a model, we cannot simply use the MODELING\_RECORDS table. We need to extract the records to have a **reasonable ratio of records** between the ATTRITION and the NON-ATTRITION records. For this we again work with the data engineering team to generate appropriate csv files for each available year.

To get an idea of the complexity of data engineering, let’s take a look at the **Create the Modeling Table** notebook that shows how the MODELING_RECORDS table is populated and how we generate the csv files.

From the Cloud Pak for Data home screen, click on the menu. Expand the **Projects** section and select **All projects**.

![All projects](./img/all_projects.png)

Click on the **Employee Attrition** project from the list to open it. The project contains notebooks, data assets, connections, model experiments, and other materials to allow multiple people to collaborate on data science projects.

Scroll down to the **Notebooks** section and click on the **Data Engineering** notebook.

![Data engineering notebook](./img/data_engineering_notebook.png)

Take a moment to view the code, noting how it pulls from multiple data sources and then samples the results to generate an ideal dataset for training a new model.

When you are finished, click on the project name in the upper left corner to return to the project.

![Employee attrition project](./img/employee_attrition_project.png)

We can use this dataset to create a new AutoAI Experiment to better reflect the current situation.

## 3. AutoAI models

From the list of project assets, scroll down to the **AutoAI experiments** section and click on **AutoAI Attrition 2020 Experiment**.

![Attrition experiment](./img/attrition_experiment.png)

The **Experiment summary** provides a graphical overview of the different pipelines created by the AutoAI experiment. Scroll down to the **Pipeline leaderboard**.

AutoAI experiments can be configured to optimize for several different measurements depending on the type of classifier used. In this case, for a binary classification problem, we have optimized for Area under ROC. The eight pipelines have been ranked based on their scores for this measurement. The leaderboard shows the accuracy score and the various enhancements such as hyperparameter optimization and feature engineering used by the pipelines. Note that the build times for the pipelines are all roughly one minute or less; AutoAI is an excellent tool for rapid prototyping.

For more information on a specific pipeline, click on its entry in the leaderboard.

![Pipeline leaderboard](./img/pipeline_leaderboard.png)

Take a moment to explore the pipeline information, including the confusion matrix, model information, and feature transforms. When you are ready, scroll to the bottom of the **Model viewer** section and click on **Feature importance**.

![Model viewer menu](./img/model_viewer.png)

This screen shows the impact different features have in the model's prediction. For any engineered feature, hovering your mouse pointer over the feature will show how the feature was derived. Note that OVERTIME now plays a significant role in the prediction. COMMUTE\_TIME is still present, as it is now a proxy feature for warehouse workers, who are the only ones regularly commuting to a physical location.

![Feature importance](./img/feature_importance.png)

Once you have finished exploring, you can close the Pipeline details screen to return to the AutoAI experiment.

Pipelines can be saved as models directly for immediate use and evaluation, or the code can be exported to a Python notebook for further evaluation or optimization.

Now that the new challenger model has been created, we can evaluate its performance against the existing production model.

## 4. Compare the challenger and production models

Return to the OpenScale instance in your browser. If necessary, go to the Insights dashboard by clicking on the icon for it in the left navigation.

![Insights dashboard](./img/insights_dashboard.png)

Our new model with the 2020 data is shown on the dashboard in its pre-production state. Click on the tile for the challenger model.

![Preproduction model tile](./img/preprod_tile.png)

The model details screen shows how the model scored on quality and drift for a set of test data. You can directly compare this model with our production model. Click on the **Actions** menu and select **Compare**.

![Actions compare](./img/actions_compare.png)

In the dropdown menu, select the **predictive attrition – 2018** model. After a moment to load the data, you will see a side-by-side comparison between the two models and their most recent test results.

![Select comparison model](./img/select_comparison.png)

Take a moment to view the comparison. At this point, we can choose to continue to refine the challenger model or approve it for production and begin migrating it to a production environment to replace the existing production model. You can also explore the various items on the **Actions** menu, which will allow you to generate a PDF report of the test results and view model information.

## Summary

Models require data that needs to be discovered, processed and analyzed. Once a model is creat-ed, it requires monitoring and will eventually need to be refreshed.

By completing this lab, you saw:

- How to monitor a deployed model to discover issues
- How data engineers create datasets for model training
- How AutoAI can rapidly prototype new models
- How OpenScale can be used to compare two different models
