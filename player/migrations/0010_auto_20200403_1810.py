# Generated by Django 3.0.4 on 2020-04-03 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0009_auto_20200403_1809'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='commentary',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]
