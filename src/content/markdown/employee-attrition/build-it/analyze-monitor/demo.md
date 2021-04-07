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

## 2. Deploy the employee attrition model

The project contains several data assets, AutoAI experiments, and models. We will need to deploy our initial attrition model. From the **Assets** tab of the project, scroll down to the **Models** section and click on the **Attrition 2018 Experiment P1...** model.

![Attrition 2018 model](./img/attrition_model.png)

This model was initially built with employee attrition data in 2018, and then retrained and redeployed with new data in 2019.

Click on **Promote to deployment space**.

![Promote to deployment space](./img/promote_to_deployment_space.png)

In later steps, we will run a Python notebook that will perform OpenScale configuration. As part of that notebook, the deployment space holding this model will be removed from OpenScale, and any other models hosted there will lose all OpenScale monitoring data. For this reason, it is highly recommended that you create a new deployment space for this model. Click the **New space** button.

![New deployment space](./img/new_space.png)

Give your space a name and optional description to denote that this will be a space to hold production models, and click **Create**. Once the space has been created, click **Close** to return to the model promotion screen.

Use the dropdown to select your new space as the target space, and click **Promote**.

![Target space](./img/target_space.png)

From the menu in the upper left corner of the screen, select **Deployments**.

![Deployments](./img/deployments.png)

From the **Spaces** tab on the deployments screen, click on the space you just created.

Locate the model from the list and click the rocket ship icon to deploy it.

![Deploy model](./img/deploy_model.png)

On the Create a deployment screen, select the **Online** tile and give your model the name **predictive attrition - 2018**. You can choose a different name for your deployed model, but you will need to alter the configuration in the Pyton notebook in the next step. Click **Create**.

![Predictive attrition 2018 deployment](./img/predictive_attrition_deploy.png)

While the model is deploying, navigate to the **Settings** tab of the deployment space. Copy the Space ID for the deployment space to your favorite text editor. We will use it as part of the Python notebook configuration in the next step.

![Space ID](./img/space_id.png)

You can monitor the progress of your deployment from the **Deployments** tab. When the deployment has finished, you can proceed to the next step.

## 3. Run the Python notebook

The provided Python notebook will configure OpenScale monitoring for the model we have just deployed, and feed in monitor data. Using the menu in the upper left,  click **All projects**.

![Projects menu](./img/projects.png)

Click on the project you have been using, and from the **Assets** tab, scroll down to the **Notebooks** section. Click the pencil icon to edit the **OpenScale model configuration** notebook.

![Notebooks](./img/notebooks.png)

Follow the instructions to edit the configuration cells at the top of the notebook. You will need your Cloud Pak for Data user credentials, the space ID of the deployment you generated in a previous step, and your OpenScale datamart ID. The notebook contains links and instructions for finding this information. If you used a different name for the deployed model, you will need to change that as well.

Once you have updated the necessary cells, run the notebook by clicking the **Cell** menu item and selecting **Run All**.

![Run all cells](./img/run_all_cells.png)

The notebook will take a few minutes to run. When it has completed, you can proceed to the next step.

## 4. Explore the OpenScale monitors

Coming soon

## 5. Train a challenger model with AutoAI

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

## 6. Deploy the challenger model

We will now deploy the new challenger model so that we can use OpenScale to evaluate it against our existing production model.

From the **Assets** tab of the project, scroll down to the **Models** section and click on the newly-saved model.

![Attrition 2020 model](./img/challenger_model.png)

Click on **Promote to deployment space**.

![Promote to deployment space](./img/promote_to_deployment_space.png)

When configuring machine learning providers in OpenScale, deployment spaces are designated as production or pre-production spaces. The model we previously deployed has been configured as model in a production space, so we need to create another new deployment space to hold this model. When we configure OpenScale to monitor it, we will designate this space as a pre-production space.

Click the **New space** button.

![New deployment space](./img/new_space.png)

Give your space a name and optional description to denote that this will be a space to hold pre-production models, and click **Create**. Once the space has been created, click **Close** to return to the model promotion screen.

Use the dropdown to select your new space as the target space, and click **Promote**.

![Target space](./img/target_preprod_space.png)

From the menu in the upper left corner of the screen, select **Deployments**.

![Deployments](./img/deployments.png)

From the **Spaces** tab on the deployments screen, click on the space you just created.

Locate the model from the list and click the rocket ship icon to deploy it.

![Deploy model](./img/deploy_preprod_model.png)

On the Create a deployment screen, select the **Online** tile and give your model the name **predictive attrition - challenger**. Click **Create**.

You can monitor the progress of your deployment from the **Deployments** tab. When the deployment has finished, you can proceed to the next step.

## 7. Configure OpenScale monitoring for the challenger model

Coming soon

## 8. Compare the production and challenger models

Work in progress

## 9. Modeling exploration with Modeler Flows

Working on it

## Summary

Models require data that needs to be discovered, processed and analyzed. Once a model is created, it requires monitoring and will eventually need to be refreshed.

By completing this lab, you:

- Monitored a deployed model to discover issues
- Created and deployed a challenger model using AutoAI
- Configured OpenScale to monitoring the new model and compare it to the previous model
- Used Modeler Flows to do additional modeling explorations

