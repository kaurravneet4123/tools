Search.setIndex({docnames:["api/bump_version","api/create","api/download","api/index","api/launch","api/licences","api/lint","api/list","api/modules","api/schema","api/sync","api/utils","index","lint_tests/actions_awsfulltest","lint_tests/actions_awstest","lint_tests/actions_ci","lint_tests/actions_schema_validation","lint_tests/conda_dockerfile","lint_tests/conda_env_yaml","lint_tests/files_exist","lint_tests/files_unchanged","lint_tests/index","lint_tests/merge_markers","lint_tests/nextflow_config","lint_tests/pipeline_name_conventions","lint_tests/pipeline_todos","lint_tests/readme","lint_tests/schema_lint","lint_tests/schema_params","lint_tests/template_strings","lint_tests/version_consistency"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["api/bump_version.rst","api/create.rst","api/download.rst","api/index.rst","api/launch.rst","api/licences.rst","api/lint.rst","api/list.rst","api/modules.rst","api/schema.rst","api/sync.rst","api/utils.rst","index.rst","lint_tests/actions_awsfulltest.rst","lint_tests/actions_awstest.rst","lint_tests/actions_ci.rst","lint_tests/actions_schema_validation.rst","lint_tests/conda_dockerfile.rst","lint_tests/conda_env_yaml.rst","lint_tests/files_exist.rst","lint_tests/files_unchanged.rst","lint_tests/index.rst","lint_tests/merge_markers.rst","lint_tests/nextflow_config.rst","lint_tests/pipeline_name_conventions.rst","lint_tests/pipeline_todos.rst","lint_tests/readme.rst","lint_tests/schema_lint.rst","lint_tests/schema_params.rst","lint_tests/template_strings.rst","lint_tests/version_consistency.rst"],objects:{"nf_core.bump_version":{bump_nextflow_version:[0,1,1,""],bump_pipeline_version:[0,1,1,""],update_file_version:[0,1,1,""]},"nf_core.create":{PipelineCreate:[1,2,1,""]},"nf_core.create.PipelineCreate":{git_init_pipeline:[1,3,1,""],init_pipeline:[1,3,1,""],make_pipeline_logo:[1,3,1,""],render_template:[1,3,1,""]},"nf_core.download":{DownloadProgress:[2,2,1,""],DownloadWorkflow:[2,2,1,""]},"nf_core.download.DownloadProgress":{get_renderables:[2,3,1,""]},"nf_core.download.DownloadWorkflow":{compress_download:[2,3,1,""],download_configs:[2,3,1,""],download_wf_files:[2,3,1,""],download_workflow:[2,3,1,""],fetch_workflow_details:[2,3,1,""],find_container_images:[2,3,1,""],get_singularity_images:[2,3,1,""],singularity_copy_cache_image:[2,3,1,""],singularity_download_image:[2,3,1,""],singularity_image_filenames:[2,3,1,""],singularity_pull_image:[2,3,1,""],validate_md5:[2,3,1,""],wf_use_local_configs:[2,3,1,""]},"nf_core.launch":{Launch:[4,2,1,""]},"nf_core.launch.Launch":{build_command:[4,3,1,""],get_pipeline_schema:[4,3,1,""],get_web_launch_response:[4,3,1,""],launch_pipeline:[4,3,1,""],launch_web_gui:[4,3,1,""],launch_workflow:[4,3,1,""],merge_nxf_flag_schema:[4,3,1,""],print_param_header:[4,3,1,""],prompt_group:[4,3,1,""],prompt_param:[4,3,1,""],prompt_schema:[4,3,1,""],prompt_web_gui:[4,3,1,""],sanitise_web_response:[4,3,1,""],set_schema_inputs:[4,3,1,""],single_param_to_questionary:[4,3,1,""],strip_default_params:[4,3,1,""]},"nf_core.licences":{WorkflowLicences:[5,2,1,""]},"nf_core.licences.WorkflowLicences":{fetch_conda_licences:[5,3,1,""],get_environment_file:[5,3,1,""],print_licences:[5,3,1,""],run_licences:[5,3,1,""]},"nf_core.lint":{PipelineLint:[6,2,1,""],run_linting:[6,1,1,""]},"nf_core.lint.PipelineLint":{_get_results_md:[6,3,1,""],_lint_pipeline:[6,3,1,""],_print_results:[6,3,1,""],_save_json_results:[6,3,1,""],_strip_ansi_codes:[6,3,1,""],_wrap_quotes:[6,3,1,""],actions_awsfulltest:[13,3,1,""],actions_awstest:[14,3,1,""],actions_ci:[15,3,1,""],actions_schema_validation:[16,3,1,""],conda_dockerfile:[17,3,1,""],conda_env_yaml:[18,3,1,""],failed:[6,4,1,""],files_exist:[19,3,1,""],files_unchanged:[20,3,1,""],ignored:[6,4,1,""],lint_config:[6,4,1,""],merge_markers:[22,3,1,""],nextflow_config:[23,3,1,""],passed:[6,4,1,""],pipeline_name_conventions:[24,3,1,""],pipeline_todos:[25,3,1,""],readme:[26,3,1,""],release_mode:[6,4,1,""],schema_lint:[27,3,1,""],schema_params:[28,3,1,""],template_strings:[29,3,1,""],version_consistency:[30,3,1,""],warned:[6,4,1,""]},"nf_core.list":{LocalWorkflow:[7,2,1,""],RemoteWorkflow:[7,2,1,""],Workflows:[7,2,1,""],get_local_wf:[7,1,1,""],list_workflows:[7,1,1,""],pretty_date:[7,1,1,""]},"nf_core.list.LocalWorkflow":{get_local_nf_workflow_details:[7,3,1,""]},"nf_core.list.Workflows":{compare_remote_local:[7,3,1,""],filtered_workflows:[7,3,1,""],get_local_nf_workflows:[7,3,1,""],get_remote_workflows:[7,3,1,""],print_json:[7,3,1,""],print_summary:[7,3,1,""]},"nf_core.schema":{PipelineSchema:[9,2,1,""]},"nf_core.schema.PipelineSchema":{add_schema_found_configs:[9,3,1,""],build_schema:[9,3,1,""],build_schema_param:[9,3,1,""],get_schema_defaults:[9,3,1,""],get_schema_path:[9,3,1,""],get_web_builder_response:[9,3,1,""],get_wf_params:[9,3,1,""],launch_web_builder:[9,3,1,""],load_input_params:[9,3,1,""],load_lint_schema:[9,3,1,""],load_schema:[9,3,1,""],make_skeleton_schema:[9,3,1,""],prompt_remove_schema_notfound_config:[9,3,1,""],remove_schema_notfound_configs:[9,3,1,""],remove_schema_notfound_configs_single_schema:[9,3,1,""],sanitise_param_default:[9,3,1,""],save_schema:[9,3,1,""],validate_default_params:[9,3,1,""],validate_params:[9,3,1,""],validate_schema:[9,3,1,""],validate_schema_title_description:[9,3,1,""]},"nf_core.sync":{PipelineSync:[10,2,1,""],PullRequestException:[10,5,1,""],SyncException:[10,5,1,""]},"nf_core.sync.PipelineSync":{checkout_template_branch:[10,3,1,""],close_open_pr:[10,3,1,""],close_open_template_merge_prs:[10,3,1,""],commit_template_changes:[10,3,1,""],create_merge_base_branch:[10,3,1,""],delete_template_branch_files:[10,3,1,""],from_branch:[10,4,1,""],get_wf_config:[10,3,1,""],gh_repo:[10,4,1,""],gh_username:[10,4,1,""],inspect_sync_dir:[10,3,1,""],made_changes:[10,4,1,""],make_pr:[10,4,1,""],make_pull_request:[10,3,1,""],make_template_pipeline:[10,3,1,""],original_branch:[10,4,1,""],pipeline_dir:[10,4,1,""],push_merge_branch:[10,3,1,""],push_template_branch:[10,3,1,""],required_config_vars:[10,4,1,""],reset_target_dir:[10,3,1,""],sync:[10,3,1,""]},"nf_core.utils":{Pipeline:[11,2,1,""],anaconda_package:[11,1,1,""],check_if_outdated:[11,1,1,""],custom_yaml_dumper:[11,1,1,""],fetch_wf_config:[11,1,1,""],get_biocontainer_tag:[11,1,1,""],github_api_auto_auth:[11,1,1,""],nextflow_cmd:[11,1,1,""],parse_anaconda_licence:[11,1,1,""],pip_package:[11,1,1,""],poll_nfcore_web_api:[11,1,1,""],rich_force_colors:[11,1,1,""],setup_requests_cachedir:[11,1,1,""],wait_cli_function:[11,1,1,""]},"nf_core.utils.Pipeline":{_fp:[11,3,1,""],_list_files:[11,3,1,""],_load:[11,3,1,""],_load_conda_environment:[11,3,1,""],_load_pipeline_config:[11,3,1,""],conda_config:[11,4,1,""],conda_package_info:[11,4,1,""],files:[11,4,1,""],git_sha:[11,4,1,""],minNextflowVersion:[11,4,1,""],nf_config:[11,4,1,""],pipeline_name:[11,4,1,""],schema_obj:[11,4,1,""],wf_path:[11,4,1,""]},nf_core:{bump_version:[0,0,0,"-"],create:[1,0,0,"-"],download:[2,0,0,"-"],launch:[4,0,0,"-"],licences:[5,0,0,"-"],lint:[6,0,0,"-"],list:[7,0,0,"-"],modules:[8,0,0,"-"],schema:[9,0,0,"-"],sync:[10,0,0,"-"],utils:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception"},terms:{"0dev":1,"14693789":6,"1551394":7,"20with":26,"404":11,"713980":[6,7],"boolean":[5,7],"break":15,"case":[14,24],"class":[1,2,4,5,6,7,9,10,11],"default":[1,2,4,5,6,7,9,10,11,23,27],"export":17,"final":[2,15],"float":2,"function":[4,6,9,11],"import":[23,26],"int":[7,11],"new":[0,1,9,10,15,25],"return":[2,4,6,7,9,10,11,28],"short":[5,17],"throw":[23,25],"transient":2,"true":[2,4,6,7,9,10,11,23],"try":[10,11],"var":10,"while":11,AWS:[13,14],For:[13,18,20,27],IDs:27,NGS:23,PRs:10,That:[17,18,30],The:[0,2,4,6,10,11,13,14,15,17,18,23,25,26,27,28,29,30],There:27,These:[2,9,15,16,17,23,26],Use:[2,4,6],Uses:[6,11],_fp:11,_get_results_md:6,_lint_pipelin:6,_list_fil:11,_load:11,_load_conda_environ:11,_load_pipeline_config:11,_not_:23,_print_result:6,_save_json_result:6,_strip_ansi_cod:6,_wrap_quot:6,a50:26,about:[0,6,7,11,23,24],abov:16,absent:19,across:27,action:[5,13,14,15,16,23,29],actions_awsfulltest:21,actions_awstest:21,actions_ci:21,actions_schema_valid:21,activ:10,adapt:7,add:[2,9,10,25],add_schema_found_config:9,added:17,addit:[13,14,17,18,20],address:23,adher:[6,16,24,27],after:[6,13],against:[9,16,17,20],ago:7,all:[0,5,6,7,9,10,11,16,17,18,19,23,25,27,28,30],allof:27,allow:[2,14,24],alphanumer:24,also:[2,12,16,18],alt:26,american:[19,20],among:16,anaconda:[5,11,18],anaconda_packag:11,anaconda_respons:11,ani:[2,6,10,11,20,23,25,27,29],anoth:[23,30],ansi:6,answer:4,anyth:9,anywai:23,api:[7,10,11,18],api_url:11,append:4,appli:[0,4],appropri:0,archiv:2,argument:11,as_json:[5,7],ask:4,assertionerror:19,asset:[19,20],assum:23,attempt:2,attribut:[6,9,10,11,27],auth:10,author:1,auto_refresh:2,automat:[10,14],avail:[7,15,18],avoid:23,aws:19,aws_access_key_id:29,awsfulltest:[13,19],awstest:[14,19],badg:26,badli:19,bar:[2,6],base:[1,2,4,5,6,7,9,10,11,17,19],baz:6,been:15,befor:[10,23],begin:23,behind:29,being:29,best:1,between:11,bin:[17,19,20],bioconda:[11,26],bit:26,bool:[1,2,4,6,10],both:[15,17],bracket:29,branch:[10,15,19,20],brightgreen:26,british:[19,20],bug_report:[19,20],build:[0,4,9,15,18,27],build_command:4,build_schema:9,build_schema_param:9,builder:[4,9],bump:0,bump_nextflow_vers:0,bump_pipeline_vers:0,bump_vers:3,cach:[2,7,11,15],cache_path:2,calcul:2,call:[11,13,15,26],callabl:2,can:[2,5,7,11,13,14,17,18,20,27],cannot:[0,19],captur:11,cart:1,caus:17,centralis:2,certain:20,certainli:23,chang:[4,10,15,23,25],changelog:19,channel:[11,18],charact:[18,24],check:[2,6,7,9,10,11,13,14,15,16,17,18,19,20,22,23,24,25,27,28,29,30],check_if_outd:11,checkout_template_branch:10,clean:[9,17],cli:4,close:10,close_open_pr:10,close_open_template_merge_pr:10,cloud:11,cmd:11,code:[6,9,11,12,22,25,26,29],code_of_conduct:[19,20],collect:[4,5,6,7,10],colour:[6,11],column:2,com:[6,7,10,23,27],command:[4,6,9,11,15,27,28],command_onli:4,comment:[6,10,25],commit:[1,7,10,11],commit_template_chang:10,common:11,commun:6,compar:[7,16,17,20],compare_remote_loc:7,complet:[13,15],complex:28,compress:2,compress_download:2,compress_typ:2,conda:[5,11,17,18],conda_config:11,conda_dockerfil:21,conda_env_yaml:21,conda_package_info:11,condens:5,conf:19,config:[2,4,6,9,10,11,15,18,19,20,23,26,27,28,30],configur:[11,20,23],connect:11,consist:[24,30],consol:[2,10],contain:[2,6,7,11,15,16,17,18,23,24,25,26,30],content:[0,6,11,19,20,25],continu:15,contribut:[19,20],conveni:[11,25],convent:[23,24],convert:4,convien:11,copi:[2,7,17,29],core:[0,1,2,4,5,6,7,10,11,13,14,15,16,17,18,19,20,23,24,25,27,29,30],correct:[4,9,15,16],correspond:23,cost:[13,14],could:27,count:9,cpu:23,creat:[3,6,10,17,27,29],create_merge_base_branch:10,creation:1,critic:19,current:[1,10,11,15,17],current_vers:11,custom:2,custom_yaml_dump:11,customis:27,dag:23,data:[7,13,23],dataset:[13,14,15],date:27,datetim:7,deal:9,declar:2,defin:[4,15,16,18,23],definit:[4,9,27],delet:10,delete_template_branch_fil:10,dep:11,dep_channel:11,depend:[5,18],depot:2,depreci:23,describ:[12,27,28],descript:[1,4,9,23,27],desir:14,destin:2,detail:[2,7,25],dev:[10,15,23],develop:[7,12,15,17,25],dict:[4,6,7,11],dictionari:9,differ:[2,6,12,17,27],direct:2,directli:18,directori:[1,2,6,9,10,11,13,17,18,19,20,23,25,26],disabl:2,disk:[2,9],displai:[2,11,24],doc:[6,19,20,25],docker:[2,13,15,17,18,23,30],dockerfil:[17,18,19],dockerhub:[23,24],dockstor:[19,20],document:23,doe:2,doesn:[24,26],dollar:29,don:10,dot:[23,30],doubl:29,download:3,download_config:2,download_wf_fil:2,download_workflow:2,downloadprogress:2,downloadworkflow:2,downstream:6,draft:27,dsl1:[2,18],dsl2:2,dump:[6,7],duplic:27,dure:11,each:[15,18],edg:14,edit:[2,4,13,25,27],editor:25,either:[6,19],els:6,email_templ:[19,20],emploi:13,enabl:23,end:23,ensur:[9,13,14,18,24],entir:27,env:[15,17],environ:[5,11,17,18,19,26],epoch:7,equal:[18,30],error:[6,10,11,19],estim:13,etc:7,even:24,event:15,everi:28,everyth:4,exampl:[11,15,18,20,23,26,27],except:[2,10,18],execut:2,exist:[5,10,11,15,27],expand:2,expect:[2,11,13,14],extra:9,extrem:27,fail:[6,10,11,12,17,23,26,29],fail_ignor:6,failur:28,fals:[1,2,4,5,6,7,9,10],faster:11,fastqc:23,featur:13,feature_request:[19,20],fetch:[1,2,5,10,30],fetch_conda_lic:5,fetch_wf_config:11,fetch_workflow_detail:2,few:11,fiddli:26,figur:10,file:[0,2,4,5,6,9,10,11,13,14,15,16,17,18,19,20,23,25,26,27],filenam:[0,6,23],files_exist:21,files_unchang:21,filter:7,filter_bi:7,filtered_workflow:7,find:[2,10,29],find_container_imag:2,finish:6,first:1,first_param:27,fix:6,flag:[1,2,4,7,9,30],flat:[9,28],fname:2,folder:2,follow:[13,14,15,17,18,20,23,25,27],foo:6,forc:[1,2,11],forg:[11,18],form:6,format:[2,6,16,25],found:[0,2,6,7,9,10,11,13,18,19,25,26,28,29,30],fresh:10,friendli:27,from:[1,2,4,5,6,7,9,10,11,17,20,23,28,29,30],from_branch:10,full:[7,11,13],galaxyproject:2,gener:[9,23,27],get:[2,5,7,10,11,25],get_biocontainer_tag:11,get_environment_fil:5,get_local_nf_workflow:7,get_local_nf_workflow_detail:7,get_local_wf:7,get_pipeline_schema:4,get_remote_workflow:7,get_render:2,get_schema_default:9,get_schema_path:9,get_singularity_imag:2,get_tim:2,get_web_builder_respons:9,get_web_launch_respons:4,get_wf_config:10,get_wf_param:9,gh_repo:10,gh_usernam:10,git:[1,7,10,11],git_diff:15,git_init_pipelin:1,git_sha:11,gitattribut:[19,20],github:[2,6,7,10,11,13,14,15,16,19,20,23,26,29],github_api_auto_auth:11,github_pr_commit:11,github_ref:30,githubusercont:27,gitignor:20,give:11,given:[1,4,5,6,9,10,11,12,13,19,25,26],going:[13,14],gone:19,graphviz:23,groovi:[19,20],group:4,group_id:4,group_obj:4,gui:[4,25],guidelin:[6,18],hand:27,handl:[7,9,11,23],happi:11,has:[7,14,17,19,30],hash:7,have:[2,4,9,10,15,18,20,25,27,30],head:10,help:25,help_text:4,helper:6,here:25,hlatyp:[5,11],hold:[0,4,6,10,11],home:11,homepag:23,hour:7,how:[9,11],html:[19,20],http:[2,6,7,11,16,23,26,27],hub:[2,13,23],hyphen:[18,24],igenomes_ignor:23,igenomesignor:23,ignor:[6,9,18,20,28,29,30],imag:[2,11,15,17,18,19,20,24,26],img:26,immedi:19,includ:20,incur:[13,14],index:12,infit:11,inform:[0,5,6,7,10,11],inherit:6,init_pipelin:1,initialis:1,input:[4,6,9,23],insid:[17,26],inspect_sync_dir:10,instal:[2,17,23,26],instanc:[2,10,25],instead:[14,23,27],integr:15,interact:[4,9],interfac:27,introduc:[10,15],ioerror:2,is_group:4,is_requir:4,issue_templ:[19,20],iter:[6,19,20],its:[2,14],jar:[19,20],jinja:[1,29],job:16,json:[4,5,6,7,9,11,16,18,19,27,28],json_fn:6,jsonschema:[4,27],just:[7,11,15,17],keep:[11,27],kei:[4,9,11,20,27],keyword:7,kind:25,know:[4,23,25],larg:24,latest:[7,15,18],latter:23,launch:[3,13],launch_pipelin:4,launch_web_build:9,launch_web_gui:4,launch_workflow:4,layout:2,least:27,left:[13,14],level:[9,11,23,27,30],lib:[19,20],librari:6,licenc:[3,11,19,20],licens:[5,19,20],like:[2,5,7,27,29,30],limit:23,line:[6,11,17,25],link:[13,16,26],lint:[0,3,9,11,12,15,16,17,18,19,20,23,25,27,29,30],lint_config:6,linting_com:[19,20],list:[2,3,4,5,6,10,11,18,25,27],list_workflow:7,load:[4,9,11],load_input_param:9,load_lint_schema:9,load_schema:9,local:[1,2,7,10,11],local_is_latest:7,local_onli:9,local_workflow:7,localworkflow:7,locat:[2,30],lockuperror:2,logo:1,look:[2,9,10,11,22,27,30],lookuperror:11,loop:[2,11],lower:24,made:10,made_chang:10,mai:[1,30],main:[6,19,23],mainscript:23,make:[2,9,10,11,16,18,25],make_pipeline_logo:1,make_pr:10,make_pull_request:10,make_skeleton_schema:9,make_template_pipelin:10,manag:18,mani:[9,11,25],manifest:[18,23,27,30],manual:[13,14],markdown:[6,25,26],markdown_to_html:[19,20],markdownlint:[19,20],marker:22,master:[27,30],match:[1,2,7,9,11,15,18,23,26,30],matrix:15,md5sum:2,md_fn:6,mean:29,meet:26,memori:23,merg:[4,10,22],merge_mark:21,merge_nxf_flag_schema:4,messag:19,metadata:[17,20],method:23,might:9,minim:[15,23,27],minimum:[11,15,23,26],minnextflowvers:11,miss:[9,20,23],mode:6,modifi:20,modul:[3,12],month:7,more:[6,28],most:[11,17],multiqc_config:20,must:[7,13,14,15,18,19,20,23,26,27],my_first_group:27,name:[1,2,5,6,7,9,10,11,15,17,18,23,24,30],nativ:2,need:[25,27],neither:19,never:27,new_vers:0,newer:18,newli:10,newstr:0,nextflow:[0,2,4,6,7,9,10,11,13,15,19,23,26,28],nextflow_cmd:11,nextflow_config:21,nextflow_schema:[19,27,28],nextflowvers:23,nf_config:11,nf_core:[3,12],nf_param:4,nf_required_vers:23,nfcore:[2,15,17,24,30],nfcore_cach:11,nfcore_external_java_dep:[19,20],nfcoreschema:[19,20],nice:11,no_git:1,no_prompt:9,non:27,none:[1,2,4,6,7,9,10,11],normal:6,note:[9,25],now:[7,23],number:[0,2,9,15,18,23,25,30],numer:30,nxf_singularity_cachedir:2,nxf_ver:[15,23],obj:11,object:[0,1,2,4,5,6,7,9,10,11,27,28],often:14,old:23,onc:[9,11],one:[7,18,27,30],onli:[0,1,9,13,17,23,24,30],open:10,openjdk:18,opt:17,option:[2,4,9],order:[6,24],org:[2,16,27],organ:1,origin:10,original_branch:10,other:16,otherwis:24,out:[2,5,7,9,10,11],out_path:2,outdat:11,outdir:[1,2,23],output:[1,2,11,19,20],over:4,overflow:6,overview:5,overwrit:[1,11],own:14,p_kei:9,p_val:9,packag:[5,11,12,18],page:12,parallel_download:2,param:[4,9,11,23,27,28],param_id:4,param_obj:4,paramat:4,paramet:[0,1,2,4,5,6,7,9,10,11,19,23,27,28],params_in:4,params_out:4,params_path:9,pars:[6,7,11],parse_anaconda_lic:11,part:24,pass:[6,16],past:29,path:[1,2,6,9,10,11,17,23],pattern:0,per:5,picki:24,piipelin:9,pin:18,pip:18,pip_packag:11,pipelin:[0,1,2,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,23,24,25,26,27,28,29,30],pipeline_dir:[6,9,10],pipeline_logo:[19,20],pipeline_nam:[11,15,29],pipeline_name_convent:21,pipeline_obj:0,pipeline_todo:21,pipelinecr:1,pipelinelint:[0,6,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30],pipelineschema:[9,11],pipelinesync:10,place:27,placehold:29,plain:6,plugin:25,png:[19,20],polici:6,poll:11,poll_everi:11,poll_func:11,poll_nfcore_web_api:11,possibl:[2,13,14,30],post:6,post_data:11,practis:1,preexist:4,prefix:29,present:[17,18,19,23],pretti:7,prettier:11,pretty_d:7,prevent:1,primari:6,primarili:12,print:[4,5,6,7,10],print_help:4,print_json:7,print_lic:5,print_param_head:4,print_summari:7,prior:13,probabl:29,process:[2,11,23,30],profil:[2,13,15,18],progress:2,progresscolumn:2,project:[6,25,26],prompt:[4,9],prompt_group:4,prompt_param:4,prompt_remove_schema_notfound_config:9,prompt_schema:4,prompt_web_gui:4,properli:29,properti:[9,16,27],provid:[13,14],publish:15,pull:[2,7,10,11,15],pull_request:[14,15],pull_request_templ:[19,20],pullrequestexcept:10,push:[10,13,14,15],push_dockerhub:19,push_dockerhub_dev:20,push_dockerhub_releas:20,push_merge_branch:10,push_template_branch:10,pypi:[5,11,18],python:[2,11,12],pyyaml:11,quai:11,queri:[4,9,11],question:4,questionari:4,quick:25,quiet:17,rais:[0,2,10,11,19],raw:27,readi:[4,9],readm:[19,20,21],reason:6,recent:[11,17],recurs:[4,9],redirect_stderr:2,redirect_stdout:2,ref:[27,30],refer:[11,12],referenc:27,refresh_per_second:2,regex:0,releas:[2,6,7,13,15,17,23,30],release_mod:6,remain:22,rememb:18,remind:27,remot:[2,7,10,11],remote_vers:11,remote_workflow:7,remoteworkflow:7,remov:9,remove_schema_notfound_config:9,remove_schema_notfound_configs_single_schema:9,render:[2,29],render_templ:1,repeatedli:11,replac:[0,18,23],replace_with:6,repo:[7,10,11],repons:11,report:[18,23],repositori:[1,2,7,10,13,14,23,26],request:[0,7,10,11],requir:[0,2,4,9,10,11,15,16,19,23,26],required_config_var:10,reset:10,reset_target_dir:10,resourc:13,respons:[4,9,10,11],rest:7,result:[2,4,6,9,10,15,23],retriev:[5,7,11],revis:[4,7,9],rich:[2,6,11],rich_force_color:11,root:[6,10,17,18,26],rule:24,run:[1,4,5,6,9,11,12,13,14,15,16,17,23,25,27,30],run_lic:5,run_lint:6,same:1,sanitise_param_default:9,sanitise_web_respons:4,save:[9,23],save_al:4,save_schema:9,scan:0,scene:29,schema:[3,4,16,27,28],schema_default:9,schema_filenam:9,schema_lint:21,schema_obj:11,schema_param:21,schemastor:16,scrape:2,script:[16,23],search:[12,25],second:[2,11],second_param:27,secret:29,see:[6,9,23],select:[13,14],self:[2,7,9,10],semant:[0,1],send:[4,9,11],sendmail_templ:[19,20],separ:6,sequenc:23,servic:18,set:[2,4,6,7,9,10,11,19,20,23,24,27,30],set_schema_input:4,setup_requests_cachedir:11,sha:11,shield:26,should:[2,4,6,7,9,13,14,17,18,19,20,23,24,27,28],shouldn:18,show_archiv:7,show_hidden:4,show_pass:6,sign:[18,29],similar:2,singl:[4,9,18,23],single_param_to_questionari:4,singular:[2,19],singularity_cache_onli:2,singularity_copy_cache_imag:2,singularity_download_imag:2,singularity_image_filenam:2,singularity_pull_imag:2,sit:11,size:13,slash:18,small:[13,14],snake_cas:23,softwar:[5,11,18],solut:6,some:[25,26,30],someth:[19,27,29,30],sort:7,sort_bi:7,source_url:11,specif:[1,6,18],specifi:[15,16,19,20,23,30],speed_estimate_period:2,spell:[19,20],spinner:11,stack:6,stackoverflow:[6,7],star:7,start:[2,10,25],state:15,statu:11,still:23,stop:19,store:7,str:[0,1,2,5,6,7,10,11],strategi:15,string:[0,4,6,7,23,27],strip:[4,6,9],strip_default_param:4,structur:28,sub:9,subdir:11,sublist:18,submit:1,subprocess:2,subschema:[4,27],successfulli:15,suitabl:6,sum:2,summari:7,summaris:6,suppli:4,sure:[10,16,18],sven1103:7,svg:[23,26],sync:3,syncexcept:10,synchronis:10,syntax:[23,27],system:[2,11],tab:[13,14],tabl:6,tag:[0,11,15,17,23,30],take:[2,4,6,9,10,11],tar:2,target:[2,10],task:[2,23],templat:[1,9,10,20,25,29],template_str:21,tenth:11,test:[3,6,12,13,14,15,16,17,18,19,20,22,23,25,26,27,29,30],test_ful:13,text:[6,26],thei:[4,6,7,14,23,25],them:[10,16],therefor:13,thi:[2,6,7,10,11,12,13,14,15,16,17,18,19,22,23,24,25,27,29,30],three:30,through:[2,4,6,9,18,19,20,25],time:[2,7,11,15,23],timelin:23,timestamp:7,titl:[9,27],todo:25,token:10,too:18,tool:17,toolnam:18,tools_vers:11,top:[4,9,11,27],tower:13,trace:23,transform:7,travi:19,tri:[5,23],trigger:[13,14,15,23],tupl:6,turn:[13,14],twice:15,two:[2,18,27],txt:[19,20],type:[2,4,6,7,9,10,11,13,15,16,27],typic:[12,17,23,25],unchang:20,uncommit:10,under:11,unexpect:11,union:2,uniqu:14,until:[4,9,11],updat:[0,10],update_file_vers:0,url:[2,4,9,10,11,23,26,27],usag:[19,23],use:[2,4,6,7,10,11,14,15,16,17,18,23],used:[7,9,10,15,18,23,29],user:[4,11,27],usernam:10,uses:[18,29],using:[2,9,10,11,15,18,20,23],usual:2,util:[0,3,6],val:4,valid:[2,4,9,11,13,14,15,16,18,27],validate_default_param:9,validate_md5:2,validate_param:9,validate_schema:9,validate_schema_title_descript:9,valu:9,valueerror:[0,11],vari:15,variabl:[9,10,11,15,18,23,29],variou:2,veri:[17,24,25,26],verifi:16,version:[0,1,2,7,11,15,17,18,23,26,30],version_consist:21,visit:12,wai:25,wait:[9,11],wait_cli_funct:11,warn:[6,13,18,23,24,25,26,28],web:[2,4,9],web_id:4,web_onli:9,websit:[1,4,11],well:2,were:9,wf_path:[6,11],wf_use_local_config:2,wfs:2,what:4,when:[10,12,14,23,30],where:[17,25],whether:[4,10],which:[14,23],why:24,within:27,withnam:23,without:[9,11,17,27,29],wizard:4,word:6,work:2,workflow:[1,2,5,7,10,11,13,14,15,16,17,18,19,20,25,29],workflow_dispatch:[13,14],workflow_run:13,workflowlic:5,write:[2,6,9,26],wrong:19,www:26,yaml:[9,11,16,20],yesterdai:7,yml:[11,13,14,15,16,17,18,19,20,26],you:[1,6,13,14,20,23,27],your:[16,17,20,25,26,27,29],yourpipelin:27},titles:["nf_core.bump_version","nf_core.create","nf_core.download","API Reference","nf_core.launch","nf_core.licences","nf_core.lint","nf_core.list","nf_core.modules","nf_core.schema","nf_core.sync","nf_core.utils","Welcome to nf-core tools API documentation!","actions_awsfulltest","actions_awstest","actions_ci","actions_schema_validation","conda_dockerfile","conda_env_yaml","files_exist","files_unchanged","Lint tests","merge_markers","nextflow_config","pipeline_name_conventions","pipeline_todos","readme","schema_lint","schema_params","template_strings","version_consistency"],titleterms:{actions_awsfulltest:13,actions_awstest:14,actions_ci:15,actions_schema_valid:16,api:[3,12],bump_vers:0,conda_dockerfil:17,conda_env_yaml:18,core:12,creat:1,document:12,download:2,files_exist:19,files_unchang:20,indic:12,launch:4,licenc:5,lint:[6,21],list:7,merge_mark:22,modul:8,nextflow_config:23,nf_core:[0,1,2,4,5,6,7,8,9,10,11],pipeline_name_convent:24,pipeline_todo:25,readm:26,refer:3,schema:9,schema_lint:27,schema_param:28,sync:10,tabl:12,template_str:29,test:21,tool:12,util:11,version_consist:30,welcom:12}})