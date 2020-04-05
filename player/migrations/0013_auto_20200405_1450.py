# Generated by Django 3.0.4 on 2020-04-05 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0012_auto_20200405_0902'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='fruits',
            field=models.ManyToManyField(blank=True, related_name='player_fruits', to='player.Fruit'),
        ),
        migrations.AlterField(
            model_name='player',
            name='playdays',
            field=models.IntegerField(choices=[(1, 'Every day'), (2, 'On weekends'), (3, 'On weekdays')], default=1, max_length=32),
        ),
        migrations.AlterField(
            model_name='player',
            name='playtime',
            field=models.IntegerField(choices=[(1, 'During the day'), (2, 'In the morning'), (3, 'In the evening'), (4, 'At night'), (5, 'All day long 😵')], default=1, max_length=32),
        ),
    ]