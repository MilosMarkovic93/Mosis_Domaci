jQuery("#simulation")
  .on("click", ".s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70b3bd8f-a55b-4eca-b647-6a455a663eb2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0111fa1b-e472-4c44-a862-11ec5e30dcaf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-56ef7aa7-68a4-40ea-9565-e4c1e38e7e54 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eb960e16-857a-46c6-bdcb-51acc43e106b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1693e0e5-4f23-43d7-946f-ceb8ad4f3da0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1693e0e5-4f23-43d7-946f-ceb8ad4f3da0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66942628-441a-42a4-b45e-40a2e224925d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66942628-441a-42a4-b45e-40a2e224925d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66942628-441a-42a4-b45e-40a2e224925d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cace0316-79e4-4b30-824c-7898c6e4b862"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cace0316-79e4-4b30-824c-7898c6e4b862"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cace0316-79e4-4b30-824c-7898c6e4b862"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4a526d47-3245-46fb-a285-4336088dfc3d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4a526d47-3245-46fb-a285-4336088dfc3d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4a526d47-3245-46fb-a285-4336088dfc3d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd663023-6f33-4202-8ee4-39e590ac5ddf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd663023-6f33-4202-8ee4-39e590ac5ddf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd663023-6f33-4202-8ee4-39e590ac5ddf"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ba2da6c1-5911-4394-8e5b-bc77fc99cb80",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ba2da6c1-5911-4394-8e5b-bc77fc99cb80"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ba2da6c1-5911-4394-8e5b-bc77fc99cb80"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ebf33552-53cf-4f4f-a3a1-809104f12b69"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ebf33552-53cf-4f4f-a3a1-809104f12b69"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ebf33552-53cf-4f4f-a3a1-809104f12b69"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f681e7f1-6237-4c8c-b099-b65e7619a93c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f681e7f1-6237-4c8c-b099-b65e7619a93c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f681e7f1-6237-4c8c-b099-b65e7619a93c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e8b7ab83-bc88-489b-8fd1-d1fadb712d23"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });