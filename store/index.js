import moment from 'moment'

export const state = () => ({
  listOfMenus: [
    {
      date: '2018-05-20',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-05-21',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-01',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-02',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-20',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-21',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-22',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-23',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-24',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-25',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    }
  ],
  todayMenu: {
    date: '2018-06-21',
    menus: {
      breakfast: {
        dishes: [
          'ご飯',
          '鮭の塩焼き',
          '里芋と厚揚げの味噌汁'
        ]
      },
      lunch: {
        dishes: [
          '豚キムチ丼',
          'コーヒーゼリー',
          '牛乳'
        ]
      },
      dinner: {
        dishes: [
          'ご飯',
          'とんかつ おろしポン酢',
          '玉ねぎと油揚げの味噌汁',
          'キャベツサラダ'
        ]
      }
    }
  },
  viewMonthMenus: [
    {
      date: '2018-06-01',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-02',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-20',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-21',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-22',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-23',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    },
    {
      date: '2018-06-24',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            'だし巻き卵',
            '海苔の佃煮',
            '豆腐と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            'カツカレー',
            'プリン',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            '鶏のから揚げ',
            '豆腐とわかめの味噌汁',
            'キャベツサラダ',
            'ほうれん草の胡麻和え'
          ]
        }
      }
    },
    {
      date: '2018-06-25',
      menus: {
        breakfast: {
          dishes: [
            'ご飯',
            '鮭の塩焼き',
            '里芋と厚揚げの味噌汁'
          ]
        },
        lunch: {
          dishes: [
            '豚キムチ丼',
            'コーヒーゼリー',
            '牛乳'
          ]
        },
        dinner: {
          dishes: [
            'ご飯',
            'とんかつ おろしポン酢',
            '玉ねぎと油揚げの味噌汁',
            'キャベツサラダ'
          ]
        }
      }
    }
  ],
  viewMonth: null
})

export const mutations = {
  setTodayMenu (state, today) {
    state.todayMenu = state.listOfMenus.filter(function (item, index) {
      if (moment(item.date).isSame(today, 'day')) return true
    })[0]
  },
  setMonth (state) {
    state.viewMonth = moment(1, 'DD')
  },
  changeMonth (state, deltaMonth) {
    state.viewMonth = moment(state.viewMonth).add(deltaMonth, 'M')
    state.viewMonthMenus = state.listOfMenus.filter(function (item, index) {
      if (moment(item.date).isSame(state.viewMonth, 'month')) return true
    })
  }
}
